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
  HORSE_STEP1_UPDATE: (id) => `${API_BASE_URL}/horse-step1/${id}/`,
  HORSE_STEP2_UPDATE: (id) => `${API_BASE_URL}/horse-step2/${id}/`,
  HORSE_STEP3_UPDATE: (id) => `${API_BASE_URL}/horse-step3/${id}/`,
  HORSE_STEP4_UPDATE: (id) => `${API_BASE_URL}/horse-step4/${id}/`,
  MARKETPLACE: `${API_BASE_URL}/all-horses-listing/`,
  USER_PROFILE_LISTING: `${API_BASE_URL}/user-profile-listing/`,
  GET_USER_PROFILE_LISTING: (id) => `${API_BASE_URL}/user-profile-listing/${id}/`,
  GET_SINGLE_HORSE: (id) => `${API_BASE_URL}/all-horses-listing/${id}/`,
  ADMIN_LISTINGS: `${API_BASE_URL}/admin/listings/`,
  ADMIN_LISTINGS_STATS: `${API_BASE_URL}/admin/listings/stats/`,
  ADMIN_DASHBOARD_STATS: `${API_BASE_URL}/admin/dashboard/stats/`,
  ADMIN_DASHBOARD_ACTIVITY: `${API_BASE_URL}/admin/dashboard/activity/`,
  ADMIN_DASHBOARD_CHARTS: `${API_BASE_URL}/admin/dashboard/charts/`,
  MAKE_OFFER: (id) => `${API_BASE_URL}/horse/${id}/make-offer/`,
  DELETE_ADMIN_LISTING: (id) => `${API_BASE_URL}/admin/listings/${id}/`,
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
