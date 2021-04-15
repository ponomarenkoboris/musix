import { useSelector } from "react-redux";
import { resultsValue } from '../app/results'

export default function Results() {
    const results = useSelector(resultsValue)

    return (
        <>
            {Object.keys(results).length ? results.items.map(item => <h1 key={item.id}>{item.name}</h1>) : ''}
        </>
    )
}