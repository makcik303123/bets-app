import { createSlice } from "@reduxjs/toolkit";
import amountAction from "../../hooks";

const initialState = {
	list: [],
	listType: "single" | "multi",
	amount: 0,
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

		changeAmount(state, action) {
			state.amount = amountAction(state.amount, action.payload);
			console.log(state.amount);
			// if (!!state.listType) {

			// } else {
			// 	state.list[action.payload] = action.payload;
			// }
		},

		changeListType(state, action) {
			state.listType = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	clickOnMultiplayer,
	removeBetSlip,
	clearBetSlipList,
	changeListType,
	changeAmount,
} = betSlipListSlice.actions;

export default betSlipListSlice.reducer;
