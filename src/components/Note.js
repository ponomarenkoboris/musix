import { useSelector } from "react-redux";
import { allNotesTracks, allNotesArtists } from "../app/notes";
import './styles/Note.scss'
import { useState } from "react";
import { RenderList } from './RenderList'

// TODO add styles
export default function Note() {
    const tracks = useSelector(allNotesTracks)
    const artists = useSelector(allNotesArtists)
    const [activeSelector, setActiveSelector] = useState('artist')
    const [list, setList] = useState(!artists.length ? tracks : artists)

    return (
        <div className="notes-container">
            <h1 className="page-title">Мои заметки</h1>
            <div className="notes-selectors-wrapper">
                <button onClick={() => {
                    setActiveSelector('artist')
                    setList(artists)
                }} className="selector">Исполнители</button>
                <button onClick={() => {
                    setActiveSelector('track')
                    setList(tracks)
                }} className="selector">Песни</button>
            </div>
            <div className="notes-list">
                <RenderList isNote={true} type={activeSelector} list={list}/>
            </div>
        </div>
    )
}