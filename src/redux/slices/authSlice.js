import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth(state, action) {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAuth } = authSlice.actions;

export default authSlice.reducer;
