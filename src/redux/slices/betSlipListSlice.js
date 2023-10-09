import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [],
};

export const betSlipListSlice = createSlice({
	name: "betSlipList",
	initialState,
	reducers: {
		addBetSlip(state, action) {
			state.list.push(action.payload);
		},
		removeBetSlip(state, action) {
			state.list.filter((obj) => obj.id !== action.payload);
		},
		clearBetSlip(state) {
			state.list = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeAuthUid } = authUidSlice.actions;

export default authUidSlice.reducer;
