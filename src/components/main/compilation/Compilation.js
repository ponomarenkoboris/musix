import React from 'react'

export default function Compilation({ list }) {
    if (Array.isArray(list)) {
        // some logic
    } else {
        return (
            <>
                <h1>Not correct data</h1>
            </>
        )
    }

    return (
        <>
            <h1>Compilation</h1>
        </>
    )
}