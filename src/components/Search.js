import React, {useRef, useState} from "react";
import { sendSearchRequestAPI } from '../utils/spotify'
import { useDispatch } from "react-redux";
import { addResults } from "../app/results";
import './styles/Search.scss'

function debounce(fn) {
    let timer;
    return () => {
        const callFn = () => fn.call(this, arguments)
        clearTimeout(timer)
        timer = setTimeout(callFn, 300)
    }
}

export default function Search() {
    const [searchBy, setSearchBy] = useState(false)
    const [showSelectors, setShowSelectors] = useState(false)
    const searchVal = useRef()
    const dispatch = useDispatch()

    function submitHandler() {
        if (!searchVal.current.value) return
        const type = searchBy ? 'track' : 'artist'
        const searchResults = sendSearchRequestAPI(searchVal.current.value, type)
        searchResults.then(data => {
            console.log(data)
            dispatch(addResults(data))
        })
            .catch(error => console.log(error))
    }

    return (
        <div className="search-container">
            <div className="selectors">
                <div className="current-selector-wrapper" onClick={() => showSelectors ? setShowSelectors(false) : setShowSelectors(true)}>
                    <p className="current-selector">{searchBy ? 'Исполнители' : 'Песни'}</p>
                </div>
                <ul className="items-list" style={{ visibility: showSelectors ? 'visible' : 'hidden' }}>
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
                <input ref={searchVal} onChange={debounce(submitHandler)}
                       className="search-field"
                       type="text"
                       id="search-field"
                       placeholder={!searchBy ? 'Введтие имя исполнителя' : 'Введите название песни'}
                />
            </div>
        </div>
    )
}