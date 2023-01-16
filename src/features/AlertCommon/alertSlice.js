import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alertType: null,
  msgText: null,
  isOpenProp: false,
};

const alertSlice = createSlice({
  name: 'alertSlice',
  initialState,
  reducers: {
    openAlertCommon(state, action) {
      const { status, text } = action.payload;
      state.alertType = status;
      state.isOpenProp = true;
      state.msgText = text;
    },
    closeAlertCommon(state) {
      state.alertType = null;
      state.msgText = null;
    },
  },
});

// selector
export const selectorAlert = (state) => state.alert;

// action
export const { openAlertCommon, closeAlertCommon } = alertSlice.actions;

export default alertSlice.reducer;
