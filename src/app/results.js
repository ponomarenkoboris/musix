import { createSlice } from "@reduxjs/toolkit";

export const searchResults = createSlice({
    name: 'results',
    initialState: {
        type: '',
        value: []
    },
    reducers: {
        addResults: (state, action) => {
            console.log('action.payload', action.payload)
            state.type = action.payload.type
            state.value = [ ...action.payload.list ]
        }
    }
})

export const { addResults } = searchResults.actions;

export const resultsValue = state => [ state.results.type, state.results.value ];

export default searchResults.reducer