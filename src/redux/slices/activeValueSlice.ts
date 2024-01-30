import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValueState {
	value: number;
}

const initialState: ValueState = {
	value: 0,
};

export const activeValueSlice = createSlice({
	name: "activeValue",
	initialState,
	reducers: {
		changeActiveValue(state, action: PayloadAction<number>) {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeActiveValue } = activeValueSlice.actions;

export default activeValueSlice.reducer;
