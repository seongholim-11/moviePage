import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./User.module.scss";

const User = () => {
    const { id } = useParams();
    console.log("🚀 ~ file: User.jsx:8 ~ User ~ id:", id)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => {
                console.log(res);
                setUser(res.data);
                setLoading(false);
            });
    }, []);

    const userDetail = loading ? (
        <h1 className={`${style.loading}`}>is loading....</h1>
    ) : (
        <div className={`${style.user}`}>
            <div className={`${style.box}`}></div>
            <div className={`${style.userInfo} ${style.name}`}>{user.name}</div>
            <div className={`${style.userInfo} ${style.email}`}>{user.email}</div>
            <div className={`${style.userInfo} ${style.phone}`}>{user.phone}</div>
            <div className={`${style.userInfo} ${style.website}`}>{user.website}</div>
        </div>
    );

    return (
        <div>
            <h1>User Info</h1>
            {userDetail}
        </div>
    );
};

export default User;
