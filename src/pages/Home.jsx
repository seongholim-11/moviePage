import React, { useEffect, useState } from "react";
import axios from "axios";
import Appmovie from "../components/Appmovie";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [appMovie, setAppMovie] = useState([]);


    const getMovies = async () => {
        const MovieInfo = await axios.get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR"
        );
        setAppMovie(MovieInfo.data.results);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log("🚀 ~ file: Home.jsx:7 ~ Home ~ appMovie:", appMovie);

    return (
        <div className="HmovieWrap">
            {isLoading ? (
                <div className="Loading">Loading....</div>
            ) : (
                appMovie.map((item) => <Appmovie item={item} key={item.id}/>)
            )}
        </div>
    );
};

export default Home;
