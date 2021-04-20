import React, {useRef, useState} from "react";
import { sendSearchRequestAPI } from '../utils/spotify'
import { useDispatch } from "react-redux";
import { addResults } from "../app/results";
import { useSearchContext } from "../context/SearchContext";
import './styles/Search.scss'

// delay function
function debounce(fn) {
    let timer;
    return () => {
        const callFn = () => fn.call(this, arguments)
        clearTimeout(timer)
        timer = setTimeout(callFn, 300)
    }
}

export default function Search() {
    const { searchBy: type, setSearchBy } = useSearchContext()
    const [showSelectors, setShowSelectors] = useState(false)
    const searchVal = useRef()
    const dispatch = useDispatch()

    function submitHandler() {
        if (!searchVal.current.value) return
        const searchResults = sendSearchRequestAPI(searchVal.current.value, type)
        searchResults.then(data => {
            dispatch(addResults(data))
        }).catch(error => console.log(error))
    }
    // TODO complete close selector logic ( создать div с размером в весь экран при нажатии на который закрываются селекторы )
    return (
        <div className="search-container" onClick={e => !e.target.closest('.selectors') ? setShowSelectors(false) : null}>
            <div className="selectors">
                <div className="current-selector-wrapper" onClick={() => showSelectors ? setShowSelectors(false) : setShowSelectors(true)}>
                    <p className="current-selector">{type === 'artist' ? 'Исполнители' : 'Песни'}</p>
                </div>
                <ul className="items-list" style={{ visibility: showSelectors ? 'visible' : 'hidden' }}>
                    <li className="list-item-artist">
                        <label htmlFor="radio1" className="item" onClick={() => setSearchBy('artist')}>
                            <input type="radio" id="radio1" name="artist" value="artist" readOnly checked={type === 'artist'}/>
                            <p className="list-item-title">Исполнитель</p>
                        </label>
                    </li>
                    <li className="list-item-song">
                        <label htmlFor="radio2" className="item" onClick={() => setSearchBy('track')}>
                            <input type="radio" name="song" id="radio2" value="song" readOnly checked={type === 'track'}/>
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
                       placeholder={type === 'track' ? 'Введите название песни' : 'Введтие имя исполнителя'}
                />
            </div>
        </div>
    )
}