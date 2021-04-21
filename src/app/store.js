import { configureStore } from '@reduxjs/toolkit';
import notes from "./notes";
import searchResults from './results';

export default configureStore({
  reducer: {
    results: searchResults,
    favourites: notes
  },
});
