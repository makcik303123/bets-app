import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actionAmount from "../../utils/helpers/actionAmount";
// import { RootState } from "../store";

interface BetSlipListState {
	list: object[];
	listType: number;
	amount: number;
}

const initialState: BetSlipListState = {
	list: [],
	listType: 0 | 1,
	amount: 0,
};

export const betSlipListSlice = createSlice({
	name: "betSlipList",
	initialState,
	reducers: {
		clickOnMultiplayer(state, action) {
			const founderItem = state.list.find(
				(obj: any) => obj.id === action.payload.id
			);

			if (founderItem) {
				state.list = state.list.filter(
					(obj: any) => obj.id !== action.payload.id
				);
			} else {
				state.list.push(action.payload);
			}
		},
		removeBetSlip(state, action) {
			state.list = state.list.filter((obj: any) => obj.id !== action.payload);
		},
		clearBetSlipList(state) {
			state.list = [];
		},
		unloadBetSlipList(state, action) {
			state.list = action.payload;
		},

		handlerAmount(state: any, action) {
			const { type, index, amount: value } = action.payload;

			if (state.listType) {
				state.amount = actionAmount(value, type);
			} else {
				state.list[index].amount = actionAmount(value, type);
			}
		},

		changeListType(state, action) {
			state.listType = action.payload;
		},
	},
});

export const {
	clickOnMultiplayer,
	removeBetSlip,
	clearBetSlipList,
	changeListType,
	handlerAmount,
	unloadBetSlipList,
} = betSlipListSlice.actions;

export default betSlipListSlice.reducer;