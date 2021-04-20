import React from 'react'
import Search from './Search'
import AuthArea from "./Auth";
import Results from './Results'
import './styles/SearchSong.scss'
import { SearchProvider } from "../context/SearchContext";

export default function SearchSong() {
    const controller = localStorage.getItem('access_token');

    return (
        <div className="search-song-container">
            <div className="page-top-container">
                {!controller ? <div className="auth-wrapper"><h1><AuthArea /></h1></div> : ''}
            </div>
            <SearchProvider>
                <div className="search-field-wrapper">
                    <Search />
                </div>
                <div className="results-container">
                    <Results />
                </div>
            </SearchProvider>
        </div>
    )
}