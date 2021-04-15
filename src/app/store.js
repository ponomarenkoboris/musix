import { configureStore } from '@reduxjs/toolkit';
import searchResults from './results';
import userData from './userDara';

export default configureStore({
  reducer: {
    results: searchResults,
    user: userData
  },
});
