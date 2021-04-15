import { configureStore } from '@reduxjs/toolkit';
import searchResults from './results';

export default configureStore({
  reducer: {
    results: searchResults
  },
});
