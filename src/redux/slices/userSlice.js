import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserData(state, action) {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserData } = userSlice.actions;

export default userSlice.reducer;
