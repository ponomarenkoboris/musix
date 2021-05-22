import React from 'react'
import {useSelector} from "react-redux"
import {resultsValue} from "../app/results"
import {RenderArtists} from "./renders/RenderArtists"
import {RenderTracks} from "./renders/RenderTracks"
import {useSearchContext} from "../context/SearchContext"
import {allNotesArtists, allNotesTracks} from "../app/notes"

export const RenderList = ({ isNote, active = 'artist' }) => {
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
    if (isNote) {
        const tracks = useSelector(allNotesTracks)
        const artists = useSelector(allNotesArtists)

        if (active === 'artist' && !artists.length) return <p>Записей пока нет</p>
        if (active === 'track' && !tracks.length) return <p>Записей пока нет</p>

        return (
            <div style={{ marginTop: '50px' }}>
                {active === 'artist' ? <RenderArtists list={artists}/> : <RenderTracks list={tracks} />}
            </div>
        )
    }
}