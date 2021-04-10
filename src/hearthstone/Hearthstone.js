import React, {useState} from 'react'
import { getAllCards } from "./getAllCards";

export default function Hearthstone() {
    const [cards, setCards] = useState(null)
    const data = getAllCards()
    data.then(categ => setCards(JSON.stringify(categ)))

    return (
        <div className="hearthstone-container">
            {cards ?? 'loading...'}
        </div>
    )
}