import { configureStore } from '@reduxjs/toolkit';
import anualCostReducer from './slices/anualCostSlice';

export default configureStore({
  reducer: {
    counter: anualCostReducer,
  },
});
