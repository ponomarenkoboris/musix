import React from 'react'
import Search from './Search'
import AuthArea from "./Auth";
import Results from './Results'
import './styles/SearchSong.scss'
import { getCode } from '../utils/spotify';

export default function SearchSong() {
    const controller = localStorage.getItem('access_token') ?? ''
    getCode()

    return (
        <div className="search-song-container">
            <div className="page-top-container">
                {!controller ? <div className="auth-wrapper"><h1><AuthArea /></h1></div> : ''}
            </div>
            <div className="search-field-wrapper">
                <Search />
            </div>
            <div className="search-results">
                <Results />
            </div>
        </div>
    )
}