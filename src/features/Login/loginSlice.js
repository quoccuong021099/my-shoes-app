import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: { isLoading: false, isSuccess: false },
  token: null,
  code: null,
  message: null,
  isLogin: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.status.isLoading = true;
      state.isLogin = false;
    },
    loginSuccess(state, action) {
      state.status.isLoading = false;
      state.status.isSuccess = true;
      state.token = action.payload.token;
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isLogin = true;
    },
    loginFailed(state, action) {
      state.status.isLoading = false;
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
    logout(state) {
      localStorage.removeItem('token');
      state.isLogin = false;
      state.token = null;
      state.code = null;
      state.message = null;
      window.location.reload();
    },
  },
});

// action
export const { login, loginSuccess, loginFailed, logout } = loginSlice.actions;

// selector
export const selectToken = (state) => state.login.token;
export const selectStatusLogin = (state) => state.login.status;
export const isLoginFlag = (state) => state.login.isLogin;

export default loginSlice.reducer;
