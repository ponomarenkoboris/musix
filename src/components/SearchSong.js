import React from 'react'
import Search from './Search'
// import Results from './Results'
import { SearchProvider } from "../context/SearchContext";
import { requestAuthorization } from "../utils/spotify";

import './styles/SearchSong.scss'
import {useSelector} from "react-redux";
import {resultsValue} from "../app/results";
import {RenderList} from './RenderList'

export default function SearchSong() {
    const controller = localStorage.getItem('access_token');
    const [ type, list ] = useSelector(resultsValue)

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
                    <RenderList isNote={false} type={type} list={list} />
                </div>
            </SearchProvider>
        </div>
    )
}