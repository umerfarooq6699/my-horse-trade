// API Base URL
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, "");
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'my-horse-trade';

// API Endpoints
export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/signup/`,
  LOGIN: `${API_BASE_URL}/login/`,
  SEND_OTP: `${API_BASE_URL}/send-otp-email/`,
  VERIFY_OTP: `${API_BASE_URL}/verify-otp`,
  USER_PROFILE: `${API_BASE_URL}/user-profile`,
  ALL_USERS: `${API_BASE_URL}/all-users`,
  DELETE_USER: `${API_BASE_URL}/delete-user`,
  CHANGE_PASSWORD: `${API_BASE_URL}/change-password`,
  GET_USER_DETAILS: `${API_BASE_URL}/my-details`,
  UPDATE_PROFILE: `${API_BASE_URL}/update-profile`,
  HORSE_STEP1: `${API_BASE_URL}/horse-step1/`,
  HORSE_STEP2: `${API_BASE_URL}/horse-step2/`,
  HORSE_STEP3: `${API_BASE_URL}/horse-step3/`,
  HORSE_STEP4: `${API_BASE_URL}/horse-step4/`,
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
