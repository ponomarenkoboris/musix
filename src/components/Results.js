import { useSelector } from "react-redux";
import { resultsValue } from '../app/results';
import './styles/Results.scss';

export default function Results() {
    const [ type, list ] = useSelector(resultsValue)

    return (
        <>
            {type === 'artist' && list.length ? list.map(item =>
                <div key={item.id} className={`${type}-wrapper`}>
                    <a href={item.external_urls.spotify}>
                        <div className={`${type}-main-info`}>
                            { !item.images.length ? '' : <img src={item.images[2].url} alt={`${type} photo`} className={`${type}-photo`}/>}
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
                    { !item.album.images.length ? '' : <img src={item.album.images[2].url} alt={`${type}- photo`} className={`${type}-photo`}/> }
                    <a href={item.preview_url} className={`${type}-link-wrapper`}>
                        <h1 className={`${type}-title`}>{item.name}</h1>
                    </a>
                    <div className="authors-wrapper">
                        {item.artists.map((artist, idx) =>
                            <p key={idx} className="author">{artist.name}</p>
                        )}
                    </div>
                </div>
            ) : ''}
        </>
    )
}