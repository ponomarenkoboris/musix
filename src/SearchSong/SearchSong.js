import React from 'react'
import SearchField from './Searchfield'
import AuthArea from "./Auth";

export default function SearchSong() {
    return (
        <div className="search-song-container">
            <h1 className="page-title">Hi search</h1>
            {localStorage.getItem('client_id') || <div className="authentication"><AuthArea /></div>}
            <div className="search-field-wrapper">
                <SearchField />
            </div>
            <div className="search-results">
                RESULTS
            </div>
        </div>
    )
}