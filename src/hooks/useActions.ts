import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { changeActiveValue } from "../redux/slices/activeValueSlice";
import { changeAuthUid } from "../redux/slices/authUidSlice";
import { changeUserData } from "../redux/slices/userSlice";
import {
	clickOnMultiplayer,
	removeBetSlip,
	clearBetSlipList,
	changeListType,
	handlerAmount,
	unloadBetSlipList,
} from "../redux/slices/betSlipListSlice";

const BetSlipListActions = {
	clickOnMultiplayer,
	removeBetSlip,
	clearBetSlipList,
	changeListType,
	handlerAmount,
	unloadBetSlipList,
};

const AppActions = {
	changeActiveValue,
	changeAuthUid,
	changeUserData,
	...BetSlipListActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(AppActions, dispatch);
};
