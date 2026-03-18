import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import horseReducer from './slices/horseSlice';
import adminReducer from './slices/adminSlice';
import profileReducer from './slices/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    horse: horseReducer,
    admin: adminReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
