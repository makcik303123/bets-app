import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [],
};

export const betSlipListSlice = createSlice({
	name: "betSlipList",
	initialState,
	reducers: {
		clickOnMultiplayer(state, action) {
			const founderItem = state.list.find(
				(obj) => obj.id === action.payload.id
			);

			if (founderItem) {
				console.log(founderItem);
				state.list = state.list.filter((obj) => obj.id !== action.payload.id);
			} else {
				state.list.push(action.payload);
			}
		},
		removeBetSlip(state, action) {
			console.log(action.payload);
			state.list = state.list.filter((obj) => obj.id !== action.payload);
		},
		clearBetSlipList(state) {
			state.list = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { clickOnMultiplayer, removeBetSlip, clearBetSlipList } =
	betSlipListSlice.actions;

export default betSlipListSlice.reducer;
