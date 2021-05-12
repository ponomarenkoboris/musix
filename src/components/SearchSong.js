import React from 'react'
import Search from './Search'
import { SearchProvider } from "../context/SearchContext";
import { requestAuthorization } from "../utils/spotify";

import styles from  './styles/SearchSong.scss'
import {useSelector} from "react-redux";
import {resultsValue} from "../app/results";
import {RenderList} from './RenderList'

export default function SearchSong() {
    const controller = localStorage.getItem('access_token');
    const [ _, list ] = useSelector(resultsValue)

    return (
        <div className={styles.searchSongContainer}>
            <div className={styles.pageTopWrapper}>
                {!controller ?
                    <div className={styles.authenticationWrapper}>
                        <button onClick={requestAuthorization} className={styles.loginSptif}>
                            Login in Spotify
                        </button>
                    </div>
                    : ''}
            </div>
            <SearchProvider>
                <div className={styles.searchFieldWrapper}>
                    <Search />
                </div>
                <div className={styles.resultsContainer}>
                    <RenderList isNote={false} list={list} />
                </div>
            </SearchProvider>
        </div>
    )
}