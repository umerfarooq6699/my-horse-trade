import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    console.log(userData, "slice object")
    try {
      const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, loginData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  signupData: {
    loading: false,
    error: null,
    success: false,
  },
  login: {
    loading: false,
    error: null,
    success: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.login.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.login.success = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.login = initialState.login;
      state.signupData = initialState.signupData;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    resetSignupState: (state) => {
      state.signupData = initialState.signupData;
    },
    resetLoginState: (state) => {
      state.login = initialState.login;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.signupData.loading = true;
        state.signupData.error = null;
        state.signupData.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signupData.loading = false;
        state.isAuthenticated = false; // Usually signup doesn't log you in automatically unless token is provided
        state.user = action.payload.user;
        state.signupData.success = action.payload.message || true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signupData.loading = false;
        state.signupData.error = action.payload;
        state.signupData.success = false;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
        state.login.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.login.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
        state.login.success = false;
      });
  },
});

export const { loginSuccess, logout, updateUser, resetSignupState, resetLoginState } = authSlice.actions;
export default authSlice.reducer;
