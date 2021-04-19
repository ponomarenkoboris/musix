import { useSelector } from "react-redux";
import { resultsValue } from '../app/results';
import { useSearchContext } from "../context/SearchContext";

// TODO complete result render logic for artist and track
export default function Results() {
    const results = useSelector(resultsValue)
    const { searchBy } = useSearchContext()
    console.log(searchBy)

    return (
        <>
            {results.length ? results.map(item =>
                <div key={item.id} className="item-wrapper">
                    {item.images.length ? <img src={item.images[2].url} alt="Artist look" className="artist-img" /> : ''}
                    <h1 className="result-title">{item.name}</h1>
                    <p className="result-genre">{item.genres}</p>
                </div>
            ) : ''}
        </>
    )
}