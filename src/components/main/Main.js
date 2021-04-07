import React from 'react';
import Search from "./search/Search";
import Recomend from "./recomendMovies/RecomendMovies";
import Compilation from "./compilation/Compilation";

export default function Main() {

    return (
        <div className="main-page">
            <div className="search-wrapper">
                <Search />
            </div>
            <div className="recomendations">
                <Recomend />
            </div>
            <div className="compilation-of-fils">
                <Compilation list={[]}/>
            </div>
        </div>
    )
}