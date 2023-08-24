import React from "react";

const Movie = ({ movie, removeMovie }) => {
    return (
        <div className="movie">
            <div className="movie-title">
                {movie.title}
                <span className="movie-year">{movie.year}</span>
            </div>
            <div>
                <button className="delete" onClick={() => removeMovie(movie.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Movie;
