import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	data: object | false;
}

const initialState: UserState = {
	data: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeUserData(state, action: PayloadAction<object | false>) {
			state.data = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeUserData } = userSlice.actions;

export default userSlice.reducer;
