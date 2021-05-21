import React from 'react'
import styles from '../styles/RenderList.scss'
import { useDispatch } from "react-redux"
import { addToNote } from '../../app/notes'

export const RenderTracks = ({ list }) => {
    const dispatch = useDispatch()
    return (
        <>
            {list.map(item =>
                <div key={item.id} className={styles.trackWrapper}>
                    <div className={styles.trackInformation}>
                        <a href={item.preview_url}>
                            {!item.album.images.length ? '' :
                                <img src={item.album.images[2].url} alt={`${item.name}`}
                                     className={styles.trackPhoto}/>}
                            <p>Track name: <strong>{item.name}</strong></p>
                        </a>
                        <div className={styles.trackButtonWrapper}>
                            <button onClick={() => dispatch(addToNote({type: 'track', item}))} className={styles.addToFavorBtn}>Добавить в заметки</button>
                            <hr className={styles.underline}/>
                        </div>
                    </div>
                    <div className={styles.albumInfo}>
                        <p>Album: <strong>{item.album.name}</strong></p>
                        <p>Release date: <strong>{item.album.release_date}</strong></p>
                        <div className={styles.trackAuthorsWrapper}><strong>Authors:</strong>
                            {item.artists.map(artist =>
                                <a className={styles.linkToAuthor} key={artist.id} href={artist.external_urls.spotify}>
                                    <p className={styles.authorName}>{artist.name}</p>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}