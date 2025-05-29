import { configureStore } from '@reduxjs/toolkit';
// Ensure that './slices/companySlice.ts' exists, or update the path below if the file is elsewhere.
import companyReducer from './slices/companySlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
