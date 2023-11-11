import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: undefined,
};

export const authUidSlice = createSlice({
	name: "authUid",
	initialState,
	reducers: {
		changeAuthUid(state, action) {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeAuthUid } = authUidSlice.actions;

export const selectAuthUid = (state) => state.authUid.value;

export default authUidSlice.reducer;
