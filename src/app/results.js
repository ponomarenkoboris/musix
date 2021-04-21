import { createSlice } from "@reduxjs/toolkit";

export const searchResults = createSlice({
    name: 'results',
    initialState: {
        type: '',
        value: []
    },
    reducers: {
        addResults: (state, { payload }) => {
            state.type = payload.type
            state.value = [ ...payload.list ]
        }
    }
})

export const { addResults } = searchResults.actions;

export const resultsValue = state => [ state.results.type, state.results.value ];

export default searchResults.reducer