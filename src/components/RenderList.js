import React from 'react'
import {addToNote} from "../app/notes";
import {useDispatch} from "react-redux";
import { useSearchContext } from "../context/SearchContext";
import styles from './styles/RenderList.scss';

// TODO complete styles
export const RenderList = ({ isNote, list }) => {
    const { searchBy } = useSearchContext()
    const dispatch = useDispatch()
    if (!list.length && !isNote) return <div className={styles.emptySearchMessage}>Введите {searchBy === 'track' ? 'название песни' : 'имя исполнителя'} в поисковую строку...</div>
    if (!list.length) return <div className={styles.emptyNotes}>Записей пока нет</div>

    return (
        <>
            <h1 className="results-type">{searchBy === 'artist' ? 'Исполнители' : searchBy === 'track' ? 'Песни' : ''}</h1>
            {searchBy === 'artist' && list.length ? list.map(item =>
                <div key={item.id} className={styles.artistWrapper}>
                    <div className={styles.artistMainInfo}>
                        <a href={item.external_urls.spotify}>
                            {!item.images.length ? '' :
                                <img src={item.images[2].url} alt={`${item.name}`} className={styles.artistPhoto}/>}
                            <h1 className={styles.artistGenreTitle}>{item.name}</h1>
                        </a>
                        <div className={styles.artistButtonWrapper}>
                            {!isNote &&
                                <button onClick={() => dispatch(addToNote({type: 'artist', item}))}
                                        className={styles.addToFavorBtn}>Добавить в заметки</button>
                            }
                            <hr className={styles.underline}/>
                        </div>
                    </div>
                    <div className={styles.artistGenreWrapper}>
                        {item.genres.length ?
                            <p className={styles.artistGenreTitle}>Genre{item.genres.length > 1 ? 's' : ''}:</p> : ''}
                        {item.genres.map((genre, idx) =>
                            <p key={idx} className={styles.genreItem}>{genre}</p>
                        )}
                    </div>
                </div>
            ) : searchBy === 'track' && list.length ? list.map(item =>
                <div key={item.id} className={styles.trackWrapper}>
                    <div className={styles.trackInformation}>
                        <a href={item.preview_url}>
                            {!item.album.images.length ? '' :
                                <img src={item.album.images[2].url} alt={`${item.name}`}
                                     className={styles.trackPhoto}/>}
                            <p>Track name: <strong>{item.name}</strong></p>
                        </a>
                        <div className={styles.trackButtonWrapper}>
                            {!isNote && <button onClick={() => dispatch(addToNote({type: 'track', item}))} className={styles.addToFavorBtn}>Добавить в заметки</button>}
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
            ) : ''}
        </>
    )
}