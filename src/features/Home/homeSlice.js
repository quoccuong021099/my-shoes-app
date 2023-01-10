import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: { isLoading: false },
  data: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getListProduct(state) {
      state.status.isLoading = true;
    },
    getListProductSuccess(state, action) {
      state.status.isLoading = false;
      state.data = action.payload;
    },
    getListProductFailed(state) {
      state.status.isLoading = false;
    },
  },
});

// action
export const { getListProduct, getListProductSuccess, getListProductFailed } =
  homeSlice.actions;

// selector
export const selectListProduct = (state) => state.home.data;
export const selectStatusListProduct = (state) => state.home.status;

export default homeSlice.reducer;
