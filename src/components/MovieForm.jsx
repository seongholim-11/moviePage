import React, { useState } from "react";

const MovieForm = ({ movies, setMovies }) => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [titleError, setTitleError] = useState("");
    const [yearError, setYearError] = useState("");
    const [movieId, setMovieId] = useState(0);
    
    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("");
    };
    
    const addMovie = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("🚀 ~ file: MovieForm.jsx:9 ~ MovieForm ~ movieId:", movieId)
            setMovieId(movieId + 1);
            console.log("🚀 ~ file: MovieForm.jsx:9 ~ MovieForm ~ movieId:", movieId)
            setMovies([
                ...movies,
                { id: movieId, title: movieTitle, year: movieYear },
            ]);
            resetForm();
        }
    };

    const validateForm = () => {
        let isValid = true;

        if (!movieTitle) {
            setTitleError("Please enter a title");
            isValid = false;
        } else {
            setTitleError("");
        }

        if (!movieYear) {
            setYearError("Please enter a year");
            isValid = false;
        } else {
            setYearError("");
        }

        return isValid;
    };

    return (
        <form onSubmit={addMovie}>
            <div>
                <input
                    type="text"
                    placeholder="Movie Title"
                    value={movieTitle}
                    onChange={(e) => {
                        setMovieTitle(e.target.value);
                    }}
                />
            </div>
            <div className="error">{titleError}</div>
            <div>
                <input
                    type="number"
                    placeholder="Movie Year"
                    value={movieYear}
                    onChange={(e) => {
                        setMovieYear(e.target.value);
                    }}
                />
            </div>
            <div className="error">{yearError}</div>
            <button type="submit">add</button>
        </form>
    );
};

export default MovieForm;
