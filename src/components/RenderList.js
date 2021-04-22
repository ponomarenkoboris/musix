import {addToNote} from "../app/notes";
import {useDispatch} from "react-redux";
import './styles/RenderList.scss';

export const RenderList = ({ isNote, type, list }) => {
    const dispatch = useDispatch()
    console.log()
    if (!list.length) {
        return <div>Запеисей пока нет</div>
    }
    return (
        <>
            <h1 className="results-type">{type === 'artist' ? 'Исполнители' : type === 'track' ? 'Песни' : ''}</h1>
            {type === 'artist' && list.length ? list.map(item =>
                <div key={item.id} className={`${type}-wrapper`}>
                    <div className={`${type}-main-info`}>
                        <a href={item.external_urls.spotify}>
                            {!item.images.length ? '' :
                                <img src={item.images[2].url} alt={`${item.name}`} className={`${type}-photo`}/>}
                            <h1 className={`${list.type}-title`}>{item.name}</h1>
                        </a>
                        {!isNote && <button onClick={() => dispatch(addToNote({type, item}))}
                                            className="add-to-favor-btn">Добавить в заметки</button>}
                    </div>
                    <div className={`${type}-genre-wrapper`}>
                        {item.genres.length ?
                            <p className={`${type}-genre-title`}>Genre{item.genres.length > 1 ? 's' : ''}:</p> : ''}
                        {item.genres.map((genre, idx) =>
                            <p key={idx} className="genre-item">{genre}</p>
                        )}
                    </div>
                </div>
            ) : type === 'track' && list.length ? list.map(item =>
                <div key={item.id} className={`${type}-wrapper`}>
                    <div className="track-information">
                        <a href={item.preview_url}>
                            {!item.album.images.length ? '' :
                                <img src={item.album.images[2].url} alt={`${item.name}`}
                                     className={`${type}-photo`}/>}
                            <p>Track name: <strong>{item.name}</strong></p>
                        </a>
                        {!isNote && <button onClick={() => dispatch(addToNote({type, item}))}
                                            className="add-to-favor-btn">Добавить в заметки</button>}
                    </div>
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