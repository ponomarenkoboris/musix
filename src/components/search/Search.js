import React , { useRef } from 'react';
import './search.scss'
import { findInfo } from './findInformation'

function submitDelay(fn) {
    let timeout;
    return function () {
        const call = () => fn.call(this, arguments);
        clearTimeout(timeout)
        timeout = setTimeout(call, 500)
    }
}

export default function Search() {
    const inputValue = useRef(null)

    function searchRes() {
        const info = findInfo(inputValue.current.value);
        info.then(data => console.log(data))
    }

    return (
        <>
            <input ref={inputValue} type="text" onChange={submitDelay(searchRes)}/>
        </>
    )
}