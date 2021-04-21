import React from 'react'
import Search from './Search'
import Results from './Results'
import { SearchProvider } from "../context/SearchContext";
import { requestAuthorization } from "../utils/spotify";

import './styles/SearchSong.scss'

export default function SearchSong() {
    const controller = localStorage.getItem('access_token');

    return (
        <div className="search-song-container">
            <div className="page-top-container">
                {!controller ?
                    <div className="authentication-container">
                        <button onClick={requestAuthorization} className="login-sptif">
                            Login in Spotify
                        </button>
                    </div>
                    : ''}
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