import React, { useState } from "react"
import styles from  './styles/Note.scss'
import { RenderList } from './RenderList'

// TODO add styles
export default function Note() {
    const [activeSelector, setActiveSelector] = useState('artist')

    return (
        <div className={styles.notesContainer}>
            <h1 className={styles.pageTitle}>Мои заметки</h1>
            <div className={styles.notesSelectorsWrapper}>
                <button onClick={() => {
                    setActiveSelector('artist')
                }} className={styles.selector}>Исполнители</button>
                <button onClick={() => {
                    setActiveSelector('track')
                }} className={styles.selector}>Песни</button>
            </div>
            <div className={styles.notesList}>
                <RenderList isNote={true} active={activeSelector}/>
            </div>
        </div>
    )
}