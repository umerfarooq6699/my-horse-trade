import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  allListings: [],
  disputes: [],
  analytics: {
    totalSales: 0,
    activeUsers: 0,
    activeListings: 0,
  },
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
    setAllListings: (state, action) => {
      state.allListings = action.payload;
    },
    setDisputes: (state, action) => {
      state.disputes = action.payload;
    },
    setAnalytics: (state, action) => {
      state.analytics = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAllUsers, setAllListings, setDisputes, setAnalytics, setLoading } = adminSlice.actions;
export default adminSlice.reducer;
