import React from "react";
import { addToNote } from "../../app/notes"
import styles from "../styles/RenderList.scss"
import { useDispatch } from "react-redux"

export const RenderArtists = ({ list }) => {
    const dispatch = useDispatch()
    return (
        <>
            {list.map(item =>
                <div key={item.id} className={styles.artistWrapper}>
                    <div className={styles.artistMainInfo}>
                        <a href={item.external_urls.spotify}>
                            {!item.images.length ? '' :
                                <img src={item.images[2].url} alt={`${item.name}`} className={styles.artistPhoto}/>}
                            <h1 className={styles.artistGenreTitle}>{item.name}</h1>
                        </a>
                        <div className={styles.artistButtonWrapper}>
                            <button onClick={() => dispatch(addToNote({type: 'artist', item}))} className={styles.addToFavorBtn}>Добавить в заметки</button>
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
            )}
        </>
    )
}