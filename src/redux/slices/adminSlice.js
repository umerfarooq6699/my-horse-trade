import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';


export const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async ({ page = 1, searchValue }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.get(`${API_ENDPOINTS.ALL_USERS}?page=${page}&search=${searchValue}`, {
        headers: {
          Authorization: `token ${auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchAllListings = createAsyncThunk(
  'admin/fetchAllListings',
  async ({ page = 1, searchValue }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.get(`${API_ENDPOINTS.ADMIN_LISTINGS}?page=${page}&search=${searchValue}`, {
        headers: {
          Authorization: `token ${auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchListingStats = createAsyncThunk(
  'admin/fetchListingStats',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.get(API_ENDPOINTS.ADMIN_LISTINGS_STATS, {
        headers: {
          Authorization: `token ${auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchDashboardStats = createAsyncThunk(
  'admin/fetchDashboardStats',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.get(API_ENDPOINTS.ADMIN_DASHBOARD_STATS, {
        headers: {
          Authorization: `token ${auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchRecentActivity = createAsyncThunk(
  'admin/fetchRecentActivity',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.get(API_ENDPOINTS.ADMIN_DASHBOARD_ACTIVITY, {
        headers: {
          Authorization: `token ${auth.token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchDashboardCharts = createAsyncThunk(
  'admin/fetchDashboardCharts',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.get(API_ENDPOINTS.ADMIN_DASHBOARD_CHARTS, {
        headers: {
          Authorization: `token ${auth.token}`
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
    const { auth } = getState();
    const response = await axios.delete(`${API_ENDPOINTS.DELETE_USER}/${userId}`, {
      headers: {
        Authorization: `token ${auth.token}`
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
  listingPagination: {
    totalListings: 0,
    totalPages: 1,
    currentPage: 1
  },
  listingStats: {
    totalListings: { value: 0, trend: "+0%" },
    pendingReview: { value: 0, trend: "+0%" },
    activeAuctions: { value: 0, trend: "+0%" },
  },
  dashboardStats: {
    totalUsers: 0,
    activeListings: 0,
    pendingTransactions: "$0",
    openDisputes: 0,
  },
  recentActivity: [],
  dashboardCharts: [],
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
        state.users = action.payload.results || [];
        state.pagination = {
          totalUsers: action.payload.totalUsers || action.payload.count || 0,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage
        };
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllListings.fulfilled, (state, action) => {
        state.loading = false;
        state.allListings = action.payload.results || [];
        state.listingPagination = {
          totalListings: action.payload.totalListings,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage
        };
      })
      .addCase(fetchAllListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchListingStats.fulfilled, (state, action) => {
        state.listingStats = {
          totalListings: action.payload.totalListings || { value: 0, trend: "+0%" },
          pendingReview: action.payload.pendingReview || { value: 0, trend: "+0%" },
          activeAuctions: action.payload.activeAuctions || { value: 0, trend: "+0%" },
        };
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.dashboardStats = {
          totalUsers: action.payload.totalUsers || 0,
          activeListings: action.payload.activeListings || 0,
          pendingTransactions: action.payload.pendingTransactions || "$0",
          openDisputes: action.payload.openDisputes || 0,
        };
      })
      .addCase(fetchRecentActivity.fulfilled, (state, action) => {
        state.recentActivity = action.payload || [];
      })
      .addCase(fetchDashboardCharts.fulfilled, (state, action) => {
        state.dashboardCharts = action.payload || [];
      })
      .addCase(deleteUser.pending, (state) => {
        // Don't touch state.loading or state.error — deletion has its own
        // loading state handled in the modal. Mixing them breaks the user list UI.
        state.deleteLoading = true;
        state.deleteError = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
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
