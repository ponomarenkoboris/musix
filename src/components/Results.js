import { resultsValue } from '../app/results';
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import { allNotes, addToNote } from "../app/notes";
import './styles/Results.scss';

// TODO добавить конопку добавления элемента в заметки
export default function Results() {
    const [ type, list ] = useSelector(resultsValue)
    // const notes = useSelector(allNotes)
    // const dispatch = useDispatch()

    // const addToFavourites = (data) => {
    //     dispatch(addToNote(data))
    // }

    return (
        <>
            <h1 className="results-type">{type === 'artist' ? 'Исполнители' : type === 'track' ? 'Песни' : ''}</h1>
            {type === 'artist' && list.length ? list.map(item =>
                <div key={item.id} className={`${type}-wrapper`}>
                    <a href={item.external_urls.spotify}>
                        <div className={`${type}-main-info`}>
                            { !item.images.length ? '' : <img src={item.images[2].url} alt={`${item.name}`} className={`${type}-photo`}/>}
                            <h1 className={`${list.type}-title`}>{item.name}</h1>
                        </div>
                    </a>
                    <div className={`${type}-genre-wrapper`}>
                        {item.genres.length ? <p className={`${type}-genre-title`}>Genre{item.genres.length > 1 ? 's' : ''}:</p> : ''}
                        {item.genres.map((genre, idx) =>
                            <p key={idx} className="genre-item">{genre}</p>
                        )}
                    </div>
                </div>
            ) : type === 'track' && list.length ? list.map(item =>
                <div key={item.id} className={`${type}-wrapper`}>
                    <a href={item.preview_url}>
                        <div className="track-information">
                            { !item.album.images.length ? '' : <img src={item.album.images[2].url} alt={`${item.name}`} className={`${type}-photo`}/> }
                            <p>Track name: <strong>{item.name}</strong></p>
                        </div>
                    </a>
                    <div className="album-info">
                        <p>Album: <strong>{item.album.name}</strong></p>
                        <p>Release date: <strong>{item.album.release_date}</strong></p>
                        <div className="track-authors-wrapper"><strong>Authors:</strong>
                            {item.artists.map(artist =>
                                <a className="link-to-author" key={artist.id} href={artist.external_urls.spotify}>
                                    <p className="author-name">{artist.name}</p>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ) : ''}
        </>
    )
}