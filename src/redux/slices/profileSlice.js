import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async (passwordData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `token ${auth.token}`,
        },
      };
      const response = await axios.post(API_ENDPOINTS.CHANGE_PASSWORD, passwordData, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData, { rejectWithValue, getState, dispatch }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `token ${auth.token}`,
        },
      };
      const response = await axios.patch(API_ENDPOINTS.UPDATE_PROFILE, profileData, config);
      // dispatch(getUserDetails());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk("profile/getUserDetails", async (payload, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    const response = await axios.get(API_ENDPOINTS.GET_USER_DETAILS, {
      headers: {
        Authorization: `token ${auth.token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
})

export const userListings = createAsyncThunk("profile/userListings", async (payload, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    const response = await axios.get(API_ENDPOINTS.USER_PROFILE_LISTING, {
      headers: {
        Authorization: `token ${auth.token}`
      }
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
})

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  listings: {
    count: 0,
    results: [],
    total_listing: {
      active_listings: 0,
      horses_sold: 0
    }
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfileState: (state) => {
      state.error = null;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userListings.fulfilled, (state, action) => {
        state.loading = false;
        state.listings = action.payload;
      })
      .addCase(userListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProfileState } = profileSlice.actions;
export default profileSlice.reducer;
