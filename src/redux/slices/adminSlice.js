import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

// Async thunk for fetching all users with pagination
export const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async ({ page = 1, searchValue }, { getState, rejectWithValue }) => {
    try {
      const { auth: { token } } = getState();
      const response = await axios.get(`${API_ENDPOINTS.ALL_USERS}?page=${page}&search=${searchValue}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteUser = createAsyncThunk("adminSlice/deleteUser", async (userId, { getState, rejectWithValue }) => {
  try {
    const { auth: { token } } = getState();
    const response = await axios.delete(`${API_ENDPOINTS.DELETE_USER}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
})

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
  deleteLoading: false,
  deleteError: null,
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
      })
      .addCase(deleteUser.pending, (state) => {
        // Don't touch state.loading or state.error — deletion has its own
        // loading state handled in the modal. Mixing them breaks the user list UI.
        state.deleteLoading = true;
        state.deleteError = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log(action.payload, "all users payload")
        state.deleteLoading = false;
        // Remove the deleted user from the list immediately
        const deletedId = action.meta.arg;
        state.users = state.users.filter(user => user._id !== deletedId);
        state.pagination.totalUsers = Math.max(0, state.pagination.totalUsers - 1);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.deleteLoading = false;
        state.deleteError = action.payload;
        // Do NOT set state.error — that would show "Failed to fetch users"
      });
  },
});

export const { setAllUsers, setAllListings, setDisputes, setAnalytics, setLoading } = adminSlice.actions;
export default adminSlice.reducer;
