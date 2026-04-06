import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    // console.log(userData, "signup object")
    try {
      const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);
      console.log("Signup Response:", response);
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
      console.log("Login Response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for sending OTP
export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (emailData, { rejectWithValue }) => {
    console.log("working")
    try {
      const response = await axios.post(API_ENDPOINTS.SEND_OTP, emailData);
      console.log("Send OTP Response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isAuthenticated: typeof window !== 'undefined' ? !!localStorage.getItem('token') : false,
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
  forgotPassword: {
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
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload.token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.login = initialState.login;
      state.signupData = initialState.signupData;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
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
    resetForgotPasswordState: (state) => {
      state.forgotPassword = initialState.forgotPassword;
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
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', action.payload.token);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
        state.login.success = false;
      })
      // Send OTP
      .addCase(sendOtp.pending, (state) => {
        state.forgotPassword.loading = true;
        state.forgotPassword.error = null;
        state.forgotPassword.success = false;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.forgotPassword.loading = false;
        state.forgotPassword.success = action.payload.message || true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.forgotPassword.loading = false;
        state.forgotPassword.error = action.payload;
        state.forgotPassword.success = false;
      });
  },
});

export const { loginSuccess, logout, updateUser, resetSignupState, resetLoginState, resetForgotPasswordState } = authSlice.actions;
export default authSlice.reducer;
