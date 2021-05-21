import React from 'react'
import {useSelector} from "react-redux"
import {resultsValue} from "../app/results";
import {RenderArtists} from "./renders/RenderArtists";
import {RenderTracks} from "./renders/RenderTracks";
import {useSearchContext} from "../context/SearchContext";

// TODO complete styles
export const RenderList = ({ isNote }) => {
    if (!isNote) {
        const [ type, list ] = useSelector(resultsValue)
        const { searchBy } = useSearchContext()
        return (
            <>
                {list.length ?
                    <h1 className="results-type">{type === 'artist' ? 'Исполнители' : 'Песни'}</h1>
                    :
                    <p>Введите {searchBy === 'artist' ? 'имя исполнителя' : 'название трека'} в поисковую строку</p>
                }
                {type === 'artist' ? <RenderArtists list={list}/> : <RenderTracks list={list}/>}
            </>
        )
    }
}