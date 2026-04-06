import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINTS } from '@/utils/urls';

export const horseListingStep1 = createAsyncThunk(
  'horse/horseListingStep1',
  async (horseData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `token ${auth.token}`,
        },
      };
      console.log("Horse Data Payload:", horseData);
      const response = await axios.post(API_ENDPOINTS.HORSE_STEP1, horseData, config);
      console.log("Horse 1 Response Success:", response);
      return response.data;
    } catch (error) {
      console.error("Horse 1 Response Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for horse listing step 2
export const horseListingStep2 = createAsyncThunk(
  'horse/horseListingStep2',
  async (horseData, { rejectWithValue, getState }) => {
    try {
      const { auth, horse } = getState();
      
      let payload = horseData;
      
      // Handle FormData vs Plain Object
      if (horseData instanceof FormData) {
        const horseIdFromState = horse.horseStep1.horseId;
        const horseIdFromData = horseData.get("horse_id");
        
        if (!horseIdFromData && horseIdFromState) {
          horseData.append("horse_id", horseIdFromState);
        }
        
        // Log FormData as object for debugging
        console.log("Horse 2 Data Payload (FormData):", Object.fromEntries(horseData.entries()));
      } else {
        const horseIdFromState = horse.horseStep1.horseId;
        payload = { ...horseData, horse_id: horseData.horse_id || horseIdFromState };
        console.log("Horse 2 Data Payload (Object):", payload);
      }

      const config = {
        headers: {
          Authorization: `token ${auth.token}`,
        },
      };

      const response = await axios.post(API_ENDPOINTS.HORSE_STEP2, payload, config);
      console.log("Horse 2 Response Success:", response);
      return response.data;
    } catch (error) {
      // console.error("Horse 2 Response Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for horse listing step 3
export const horseListingStep3 = createAsyncThunk(
  'horse/horseListingStep3',
  async (horseData, { rejectWithValue, getState }) => {
    try {
      const { auth, horse } = getState();
      const horseIdFromState = horse.horseStep1.horseId;
      
      const payload = { 
        ...horseData, 
        horse_id: horseData.horse_id || horseIdFromState 
      };

      console.log("Horse 3 Data Payload:", payload);
      const config = {
        headers: {
          Authorization: `token ${auth.token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(API_ENDPOINTS.HORSE_STEP3, payload, config);
      console.log("Horse 3 Response Success:", response);
      return response.data;
    } catch (error) {
      console.error("Horse 3 Response Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for horse listing step 4
export const horseListingStep4 = createAsyncThunk(
  'horse/horseListingStep4',
  async (horseData, { rejectWithValue, getState }) => {
    try {
      const { auth, horse } = getState();
      const horseIdFromState = horse.horseStep1.horseId;
      
      const payload = { 
        ...horseData, 
        horse_id: horseData.horse_id || horseIdFromState 
      };

      console.log("Horse 4 Data Payload:", payload);
      const config = {
        headers: {
          Authorization: `token ${auth.token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(API_ENDPOINTS.HORSE_STEP4, payload, config);
      console.log("Horse 4 Response Success:", response);
      return response.data;
    } catch (error) {
      console.error("Horse 4 Response Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  listings: [],
  selectedHorse: null,
  loading: false,
  error: null,
  filters: {
    breed: '',
    age: '',
    priceRange: [0, 1000000],
    location: '',
  },
  horseStep1: {
    loading: false,
    error: null,
    success: false,
    horseId: null,
  },
  horseStep2: {
    loading: false,
    error: null,
    success: false,
  },
  horseStep3: {
    loading: false,
    error: null,
    success: false,
  },
  horseStep4: {
    loading: false,
    error: null,
    success: false,
  },
};

const horseSlice = createSlice({
  name: 'horse',
  initialState,
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    selectHorse: (state, action) => {
      state.selectedHorse = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addListing: (state, action) => {
      state.listings.unshift(action.payload);
    },
    resetHorseStep1: (state) => {
      state.horseStep1 = initialState.horseStep1;
    },
    resetHorseStep2: (state) => {
      state.horseStep2 = initialState.horseStep2;
    },
    resetHorseStep3: (state) => {
      state.horseStep3 = initialState.horseStep3;
    },
    resetHorseStep4: (state) => {
      state.horseStep4 = initialState.horseStep4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(horseListingStep1.pending, (state) => {
        state.horseStep1.loading = true;
        state.horseStep1.error = null;
        state.horseStep1.success = false;
      })
      .addCase(horseListingStep1.fulfilled, (state, action) => {
        state.horseStep1.loading = false;
        state.horseStep1.success = true;
        if (action.payload.horse_id) {
          state.horseStep1.horseId = action.payload.horse_id;
        }
      })
      .addCase(horseListingStep1.rejected, (state, action) => {
        state.horseStep1.loading = false;
        state.horseStep1.error = action.payload;
        state.horseStep1.success = false;
      })
      // Step 2
      .addCase(horseListingStep2.pending, (state) => {
        state.horseStep2.loading = true;
        state.horseStep2.error = null;
        state.horseStep2.success = false;
      })
      .addCase(horseListingStep2.fulfilled, (state, action) => {
        state.horseStep2.loading = false;
        state.horseStep2.success = true;
      })
      .addCase(horseListingStep2.rejected, (state, action) => {
        state.horseStep2.loading = false;
        state.horseStep2.error = action.payload;
        state.horseStep2.success = false;
      })
      // Step 3
      .addCase(horseListingStep3.pending, (state) => {
        state.horseStep3.loading = true;
        state.horseStep3.error = null;
        state.horseStep3.success = false;
      })
      .addCase(horseListingStep3.fulfilled, (state, action) => {
        state.horseStep3.loading = false;
        state.horseStep3.success = true;
      })
      .addCase(horseListingStep3.rejected, (state, action) => {
        state.horseStep3.loading = false;
        state.horseStep3.error = action.payload;
        state.horseStep3.success = false;
      })
      // Step 4
      .addCase(horseListingStep4.pending, (state) => {
        state.horseStep4.loading = true;
        state.horseStep4.error = null;
        state.horseStep4.success = false;
      })
      .addCase(horseListingStep4.fulfilled, (state, action) => {
        state.horseStep4.loading = false;
        state.horseStep4.success = true;
      })
      .addCase(horseListingStep4.rejected, (state, action) => {
        state.horseStep4.loading = false;
        state.horseStep4.error = action.payload;
        state.horseStep4.success = false;
      });
  },
});

export const { setListings, selectHorse, setLoading, setError, setFilters, addListing, resetHorseStep1, resetHorseStep2, resetHorseStep3, resetHorseStep4 } = horseSlice.actions;
export default horseSlice.reducer;
