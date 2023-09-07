import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const activeValueSlice = createSlice({
	name: "activeValue",
	initialState,
	reducers: {
		changeActiveValue(state, action) {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeActiveValue } = activeValueSlice.actions;

export default activeValueSlice.reducer;
