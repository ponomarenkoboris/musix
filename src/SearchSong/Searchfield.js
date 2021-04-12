import React, {useRef, useState} from "react";
// import { sendSearchRequest, requestAuthorization } from './spotify'
import './SeacrhField.scss'

export default function SearchField() {
    const [searchBy, setSearchBy] = useState(false)
    const searchVal = useRef()

    function submitHandler() {
        const type = searchBy ? 'track' : 'artist'
        // const data = sendSearchRequest(searchVal.current.value, type)
    }

    return (
        <div className="search-container">
            <div className="selectors">
                <ul className="items-list">
                    <li className="list-item-artist">
                        <label htmlFor="radio1" className="item" onClick={() => setSearchBy(true)}>
                            <input type="radio" id="radio1" name="artist" value="artist" readOnly checked={searchBy}/>
                            <p className="list-item-title">Исполнитель</p>
                        </label>
                    </li>
                    <li className="list-item-song">
                        <label htmlFor="radio2" className="item" onClick={() => setSearchBy(false)}>
                            <input type="radio" name="song" id="radio2" value="song" readOnly checked={!searchBy}/>
                            <p className="list-item-title">Песни</p>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="search-input-wrapper">
                <input ref={searchVal} className="search-field" type="text" id="string" placeholder={!searchBy ? 'Введтие имя исполнителя' : 'Введите название песни'}/>
                <button className="submit-search" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}