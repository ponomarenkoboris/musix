import { createSlice } from "@reduxjs/toolkit"

// TODO complete
export const notes = createSlice({
    name: 'favourites',
    initialState: {
        notesTracks: [],
        notesArtists: []
    },
    reducers: {
        addToNote: (state, action) => {
            const { type, item } = action.payload
            if (type === 'artist') state.notesArtists.unshift(item)
            if (type === 'track') state.notesTracks.unshift(item)
        },
        removeFromNote: (state, { payload }) => {
            console.log(state, payload)
            state.notes.filter(item => item.id !== payload.id)
        }
    }
})

export const { addToNote, removeFromNote } = notes.actions
export const allNotesTracks = state => state.favourites.notesTracks
export const allNotesArtists = state => state.favourites.notesArtists
export default notes.reducer