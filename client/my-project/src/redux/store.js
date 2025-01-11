import { configureStore } from '@reduxjs/toolkit';
import authsliceReducer from './silices/authslice';
import tourSliceReducer from './silices/tourSlice'; // Change this to tourSliceReducer

const store = configureStore({
  reducer: {
    auth: authsliceReducer,
    tour: tourSliceReducer, // Make sure this matches the import
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
