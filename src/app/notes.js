import { createSlice } from "@reduxjs/toolkit";

// TODO complete
export const notes = createSlice({
    name: 'favourites',
    initialState: {
        notes: []
    },
    reducers: {
        addToNote: (state, { payload }) => {
            console.log(state, payload)
            state.notes = [ payload, state.notes ]
        },
        removeFromNote: (state, { payload }) => {
            console.log(state, payload)
            state.notes.filter(item => item.id !== payload.id)
        }
    }
})

export const { addToNote, removeFromNote } = notes.actions;
export const allNotes = state => state.favourites.notes;
export default notes.reducer