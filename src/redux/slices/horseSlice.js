import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { setListings, selectHorse, setLoading, setError, setFilters, addListing } = horseSlice.actions;
export default horseSlice.reducer;
