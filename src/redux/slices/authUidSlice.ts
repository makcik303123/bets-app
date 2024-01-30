import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUidState {
	value: number | undefined;
}

const initialState = {
	value: undefined,
} as AuthUidState;

export const authUidSlice = createSlice({
	name: "authUid",
	initialState,
	reducers: {
		changeAuthUid(state, action: PayloadAction<number | undefined>) {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeAuthUid } = authUidSlice.actions;

export default authUidSlice.reducer;
