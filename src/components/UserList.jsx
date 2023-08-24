import React from 'react'
import { Link } from "react-router-dom";
import style from './UserList.module.css'

const UserList = ({users}) => {

  return (
    <div>
        {users.map((user) => {
                return(
                  <div className={style.card} key={user.id}>
                    <div className={style.card_body}>
                      <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </div>
                  </div>
                );
            })}
    </div>
  )
}

export default UserList