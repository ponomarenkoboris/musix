import React, { useState } from 'react';
// import { getPopularMovies } from "./getPopularMovies";

export default function Recomend() {
    const [films, setFilms] = useState(null)
    // const list = getPopularMovies();
    // list.then(filmsList => setFilms(filmsList))

    return (
        <>
            <div className="films-container">
                {!films ? <h1>Loading...</h1> : films.map(film => (
                    <div key={film} className="film-wrapper">{film}</div>
                )) }
            </div>
        </>
    )
}
