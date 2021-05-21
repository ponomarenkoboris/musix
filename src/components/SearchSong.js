import React from 'react'
import Search from './Search'
import { SearchProvider } from "../context/SearchContext"
import { requestAuthorization } from "../utils/spotify"

import styles from  './styles/SearchSong.scss'
import {RenderList} from './RenderList'

export default function SearchSong() {
    const controller = localStorage.getItem('access_token')

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
                    <RenderList isNote={false} />
                </div>
            </SearchProvider>
        </div>
    )
}