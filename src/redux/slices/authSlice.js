import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
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

// Async thunk for sending OTP
export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (emailData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_ENDPOINTS.SEND_OTP, emailData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for resending OTP
export const resendOtp = createAsyncThunk(
  'auth/resendOtp',
  async (emailData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('email', emailData.email);
      const response = await axios.post(API_ENDPOINTS.RESEND_OTP, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for verifying OTP
export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (otpData, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      // Sending only otp as a JSON object, with the token in headers
      const response = await axios.post(API_ENDPOINTS.VERIFY_OTP, { otp: otpData.otp }, {
        headers: {
          Authorization: `token ${auth.forgotPasswordToken}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for resetting password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (passwordData, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const token = auth.forgotPasswordToken;
    
    try {
      const response = await axios.post(API_ENDPOINTS.RESET_PASSWORD, passwordData, {
        headers: {
          Authorization: `token ${token}`
        }
      });
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
  forgotPasswordToken: typeof window !== 'undefined' ? localStorage.getItem('forgotPasswordToken') : null,
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
  verifyOtpState: {
    loading: false,
    error: null,
    success: false,
  },
  resetPasswordState: {
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
      state.forgotPasswordToken = null;
      state.login = initialState.login;
      state.signupData = initialState.signupData;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('forgotPasswordToken');
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
    resetVerifyOtpState: (state) => {
      state.verifyOtpState = initialState.verifyOtpState;
    },
    resetPasswordStateAction: (state) => {
      state.resetPasswordState = initialState.resetPasswordState;
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
        state.forgotPasswordToken = action.payload.token;
        if (typeof window !== 'undefined') {
          localStorage.setItem('forgotPasswordToken', action.payload.token);
        }
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.forgotPassword.loading = false;
        state.forgotPassword.error = action.payload;
        state.forgotPassword.success = false;
      })
      // Resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.forgotPassword.loading = true;
        state.forgotPassword.error = null;
        state.forgotPassword.success = false;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.forgotPassword.loading = false;
        state.forgotPassword.success = action.payload.message || "OTP resent successfully!";
        state.forgotPasswordToken = action.payload.token;
        if (typeof window !== 'undefined') {
          localStorage.setItem('forgotPasswordToken', action.payload.token);
        }
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.forgotPassword.loading = false;
        state.forgotPassword.error = action.payload;
        state.forgotPassword.success = false;
      })

      // Verify OTP
      .addCase(verifyOtp.pending, (state) => {
        state.verifyOtpState.loading = true;
        state.verifyOtpState.error = null;
        state.verifyOtpState.success = false;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.verifyOtpState.loading = false;
        state.verifyOtpState.success = action.payload.message || true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.verifyOtpState.loading = false;
        state.verifyOtpState.error = action.payload;
        state.verifyOtpState.success = false;
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.resetPasswordState.loading = true;
        state.resetPasswordState.error = null;
        state.resetPasswordState.success = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetPasswordState.loading = false;
        state.resetPasswordState.success = action.payload.message || true;
        state.forgotPasswordToken = null;
        if (typeof window !== 'undefined') {
          localStorage.removeItem('forgotPasswordToken');
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPasswordState.loading = false;
        state.resetPasswordState.error = action.payload;
        state.resetPasswordState.success = false;
      });
  },
});

export const { loginSuccess, logout, updateUser, resetSignupState, resetLoginState, resetForgotPasswordState, resetVerifyOtpState, resetPasswordStateAction } = authSlice.actions;
export default authSlice.reducer;
