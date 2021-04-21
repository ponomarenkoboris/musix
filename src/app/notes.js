import { createSlice } from "@reduxjs/toolkit";

// TODO complete
export const notes = createSlice({
    name: 'favourites',
    initialState: {
        notes: []
    },
    reducers: {
        addNote: (state, payload) => {
            console.log(state, payload)
        },
        removeNote: (state, payload) => {
            console.log(state, payload)
        }
    }
})

export const { addNote, removeNote } = notes.actions;
export const allNotes = state => state.favourites.notes;
export default notes.reducer