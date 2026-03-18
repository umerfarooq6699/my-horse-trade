// API Base URL
// export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://my-horse-trade-backend.vercel.app';

// API Endpoints
export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/signup`,
  LOGIN: `${API_BASE_URL}/signin`,
  VERIFY_OTP: `${API_BASE_URL}/verify-otp`,
  SEND_OTP: `${API_BASE_URL}/send-otp`,
  USER_PROFILE: `${API_BASE_URL}/user-profile`,
  ALL_USERS: `${API_BASE_URL}/all-users`,
  DELETE_USER: `${API_BASE_URL}/delete-user`,
  CHANGE_PASSWORD: `${API_BASE_URL}/change-password`,
  GET_USER_DETAILS: `${API_BASE_URL}/my-details`,
};

// Frontend Routes
export const APP_ROUTES = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  MARKETPLACE: '/marketplace',
  PROFILE: '/profile',
  ADMIN: '/admin',
};
