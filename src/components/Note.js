import React, { useState } from "react"
import { useSelector } from "react-redux"
import { allNotesTracks, allNotesArtists } from "../app/notes"
import styles from  './styles/Note.scss'
import { RenderList } from './RenderList'

// TODO add styles
export default function Note() {
    const tracks = useSelector(allNotesTracks)
    const artists = useSelector(allNotesArtists)
    const [activeSelector, setActiveSelector] = useState('artist')
    const [list, setList] = useState(!artists.length ? tracks : artists)

    return (
        <div className={styles.notesContainer}>
            <h1 className={styles.pageTitle}>Мои заметки</h1>
            <div className={styles.notesSelectorsWrapper}>
                <button onClick={() => {
                    setActiveSelector('artist')
                    setList(artists)
                }} className={styles.selector}>Исполнители</button>
                <button onClick={() => {
                    setActiveSelector('track')
                    setList(tracks)
                }} className={styles.selector}>Песни</button>
            </div>
            <div className={styles.notesList}>
                <RenderList isNote={true} type={activeSelector} list={list}/>
            </div>
        </div>
    )
}