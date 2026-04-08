// API Base URL
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, "");
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'my-horse-trade';

// API Endpoints
export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/signup/`,
  LOGIN: `${API_BASE_URL}/login/`,
  SEND_OTP: `${API_BASE_URL}/send-otp-email/`,
  RESEND_OTP: `${API_BASE_URL}/resend-otp/`,
  VERIFY_OTP: `${API_BASE_URL}/verify-otp/`,
  USER_PROFILE: `${API_BASE_URL}/user-profile`,
  ALL_USERS: `${API_BASE_URL}/admin/users/`,
  DELETE_USER: `${API_BASE_URL}/delete-user`,
  RESET_PASSWORD: `${API_BASE_URL}/reset-password/`,
  CHANGE_PASSWORD: `${API_BASE_URL}/change-password/`,
  GET_USER_DETAILS: `${API_BASE_URL}/user-profile/`,
  UPDATE_PROFILE: `${API_BASE_URL}/user-profile/`,
  HORSE_STEP1: `${API_BASE_URL}/horse-step1/`,
  HORSE_STEP2: `${API_BASE_URL}/horse-step2/`,
  HORSE_STEP3: `${API_BASE_URL}/horse-step3/`,
  HORSE_STEP4: `${API_BASE_URL}/horse-step4/`,
  MARKETPLACE: `${API_BASE_URL}/marketplace/`,
  USER_PROFILE_LISTING: `${API_BASE_URL}/user-profile-listing/`,
  GET_SINGLE_HORSE: (id) => `${API_BASE_URL}/marketplace/${id}/`,
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
