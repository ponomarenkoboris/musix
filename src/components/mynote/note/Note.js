import React from 'react'
import './Note.scss'

export default function Note({ id }) {
    return (
        <>
            <div className="note-list">
                <h1>NOTE + {id}</h1>
            </div>
        </>
    )
}