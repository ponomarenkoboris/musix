import { createSlice } from "@reduxjs/toolkit";

export const searchResults = createSlice({
    name: 'results',
    initialState: {
        value: {}
    },
    reducers: {
        addResults: (state, action) => {
            state.value = { ...action.payload}
        }
    }
})

export const { addResults } = searchResults.actions;

export const resultsValue = state => state.results.value;

export default searchResults.reducer