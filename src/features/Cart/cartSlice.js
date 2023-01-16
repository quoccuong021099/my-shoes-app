import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: { isLoading: false, isDeleteSuccess: false, isLoadingAddCart: false },
  data: null,
  sizeCart: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart(state) {
      state.status.isLoading = true;
    },
    getCartSuccess(state, action) {
      state.status.isLoading = false;
      state.data = action.payload;
      state.sizeCart = state.data?.length;
    },
    getCartFailed(state) {
      state.status.isLoading = false;
    },
    deleteCartItem(state, action) {
      state.data = state?.data.filter((item) => item.id !== action.payload);
      state.sizeCart = state.sizeCart > 0 ? state.sizeCart - 1 : 0;
    },
    deleteCartItemSuccess(state) {
      state.status.isDeleteSuccess = true;
    },
    deleteCartItemFailed(state) {},
    addCart(state) {
      state.isLoadingAddCart = true;
    },
    addCartSuccess(state, action) {
      state.isLoadingAddCart = false;
      state.sizeCart =
        state.data?.findIndex((item) => item.id === action.payload?.id) > -1
          ? state.sizeCart
          : state.sizeCart + 1;
    },
    addCartFailed(state) {
      state.isLoadingAddCart = true;
    },
  },
});

// selector
export const selectStatusCart = (state) => state.cart.status;
export const selectDataCart = (state) => state.cart.data;
export const selectlengthCart = (state) => state.cart.sizeCart;
// action
export const {
  getCart,
  getCartSuccess,
  getCartFailed,
  deleteCartItem,
  deleteCartItemSuccess,
  deleteCartItemFailed,
  addCart,
  addCartSuccess,
  addCartFailed,
} = cartSlice.actions;

export default cartSlice.reducer;
