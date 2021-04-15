import { createSlice } from '@reduxjs/toolkit';

export const userData = createSlice({
    name: 'UserData',
    initialState: {
        data: {}
    },
    reducers: {
        addUserData(state, action) {
            state.data = { ...action.payload }
        },
        removeUserData(state) {
            state.data = {}
        }
    }
})

export const { addUserData, removeUserData } = userData.actions;
export const currentUser = state => state.user.data;
export default userData.reducer