import React, {useRef, useState} from "react";
import { sendSearchRequestAPI } from '../utils/spotify'
import { useDispatch } from "react-redux";
import { addResults } from "../app/results";
import { useSearchContext } from "../context/SearchContext";
import styles from './styles/Search.scss'

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
    // TODO песни или селектор последнего поискового запроса.
    const [showSelectors, setShowSelectors] = useState(false)
    const searchVal = useRef()
    const dispatch = useDispatch()

    let lastSearch;
    function submitHandler() {
        if (!searchVal?.current.value && !searchVal?.current.value.trim()) return
        if (lastSearch === searchVal?.current.value.trim().toLowerCase()) return
        lastSearch = searchVal?.current.value.trim().toLowerCase()
        const searchResults = sendSearchRequestAPI(searchVal?.current.value, type)
        searchResults.then(data => {
            dispatch(addResults(data))
        }).catch(error => console.log(error))
    }
    // TODO complete close selector logic ( создать div с размером в весь экран при нажатии на который закрываются селекторы )
    return (
        <div className={styles.searchContainer} onClick={e => !e.target.closest(`.${styles.selectors}`) ? setShowSelectors(false) : null}>
            <div className={styles.selectors}>
                <div className={styles.currentSelectorWrapper} onClick={() => showSelectors ? setShowSelectors(false) : setShowSelectors(true)}>
                    <p className={styles.currentSelector}>{type === 'artist' ? 'Исполнители' : 'Песни'}</p>
                </div>
                <ul className={styles.itemsList} style={{ visibility: showSelectors ? 'visible' : 'hidden' }}>
                    <li className={styles.listItemArtist}>
                        <label htmlFor={styles.radio1} className={styles.item} onClick={() => setSearchBy('artist') || setShowSelectors(false)}>
                            <input
                                type="radio"
                                id={styles.radio1}
                                name="artist"
                                value="artist"
                                readOnly
                                checked={type === 'artist'}
                            />
                            <p className={styles.listItemTitle}>Исполнитель</p>
                        </label>
                    </li>
                    <li className={styles.listItemSong}>
                        <label htmlFor={styles.radio2} className={styles.item} onClick={() => setSearchBy('track') || setShowSelectors(false)}>
                            <input
                                type="radio"
                                name="song"
                                id={styles.radio2}
                                value="song"
                                readOnly
                                checked={type === 'track'}
                            />
                            <p className={styles.listItemTitle}>Песни</p>
                        </label>
                    </li>
                </ul>
            </div>
            <div className={styles.searchInputWrapper}>
                <input
                    ref={searchVal}
                    onChange={debounce(submitHandler)}
                    className={styles.searchField}
                    type="text"
                    id={styles.searchField}
                    placeholder={type === 'track'
                        ? 'Введите название песни'
                        : 'Введтие имя исполнителя'}
                />
            </div>
        </div>
    )
}