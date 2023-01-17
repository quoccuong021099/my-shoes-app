import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: { isLoading: false, isSuccess: false },
  code: null,
  message: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    register(state) {
      state.status.isLoading = true;
    },
    registerSuccess(state, action) {
      state.status.isLoading = false;
      state.status.isSuccess = true;
      state.token = action.payload.token;
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
    registerFailed(state, action) {
      state.status.isLoading = false;
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
  },
});

// action
export const { register, registerSuccess, registerFailed, logout } =
  registerSlice.actions;

// selector
export const selectStatusRegister = (state) => state.register.status;

export default registerSlice.reducer;
