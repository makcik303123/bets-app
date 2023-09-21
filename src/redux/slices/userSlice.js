import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData(state, action) {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
