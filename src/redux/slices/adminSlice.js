import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

// Async thunk for fetching all users with pagination
export const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_ENDPOINTS.ALL_USERS}?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  users: [],
  pagination: {
    totalUsers: 0,
    totalPages: 1,
    currentPage: 1
  },
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users || [];
        state.pagination = {
          totalUsers: action.payload.totalUsers,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage
        };
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setAllUsers, setAllListings, setDisputes, setAnalytics, setLoading } = adminSlice.actions;
export default adminSlice.reducer;
