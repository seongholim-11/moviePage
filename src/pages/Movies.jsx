import React, { useState } from "react";
import Movie from "../components/Movie";
import MovieForm from "../components/MovieForm";

const Movies = () => {
    const [movies, setMovies] = useState([
        /*         { id: 1, title: "밀수", year: "2023" },
        { id: 2, title: "다크 나이트", year: "2008" },
        { id: 3, title: "트루먼 쇼", year: "1998" }, */
    ]);

    const removeMovie = (id) => {
        const newMovieArray = movies.filter((item, idx) => {
            console.log("🚀 ~ file: Movies.jsx:15 ~ newMovieArray ~ item:", item)
            return item.id !== id
        })
        setMovies(newMovieArray);
    };

    const renderMovies = movies.length ? (
        movies.map((movie, index) => {
            return (
                <Movie
                    movie={movie}
                    index={index}
                    key={movie.id}
                    removeMovie={removeMovie}
                />
            );
        })
    ) : (
        <div>plz add movie</div>
    );

    return (
        <div>
            <h1>Movie List</h1>
            <MovieForm movies={movies} setMovies={setMovies} />
            {renderMovies}
        </div>
    );
};

export default Movies;
