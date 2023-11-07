import { createSlice } from "@reduxjs/toolkit";
import actionAmount from "../../hooks/actionAmount";

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
        state.list = state.list.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.list.push(action.payload);
      }
    },
    removeBetSlip(state, action) {
      state.list = state.list.filter((obj) => obj.id !== action.payload);
    },
    clearBetSlipList(state) {
      state.list = [];
    },

    handlerAmount(state, action) {
      const { type, index, amount: value } = action.payload;

      console.log(type);
      console.log(index);
      console.log(value);
      if (state.listType) {
        state.amount = actionAmount(value, type);
      } else {
        // console.log("1");
        state.list[index].amount = actionAmount(value, type);
      }
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
  handlerAmount,
} = betSlipListSlice.actions;

export default betSlipListSlice.reducer;
