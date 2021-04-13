import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchResults from './results';

export default configureStore({
  reducer: {
    counter: counterReducer,
    results: searchResults
  },
});
