import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: { isLoading: false },
  data: [],
};

const detailProductSlice = createSlice({
  name: 'detailProduct',
  initialState,
  reducers: {
    getProductDetail(state) {
      state.status.isLoading = true;
    },
    getProductDetailSuccess(state, action) {
      state.status.isLoading = false;
      state.data = action.payload;
    },
    getProductDetailFailed(state) {
      state.status.isLoading = false;
    },
  },
});

// action
export const {
  getProductDetail,
  getProductDetailSuccess,
  getProductDetailFailed,
} = detailProductSlice.actions;

// selector
export const selectProductDetail = (state) => state.detailProduct.data;
export const selectStatusProductDetail = (state) => state.detailProduct.status;

export default detailProductSlice.reducer;
