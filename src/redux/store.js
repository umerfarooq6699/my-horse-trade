import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import horseReducer from './slices/horseSlice';
import adminReducer from './slices/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    horse: horseReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
