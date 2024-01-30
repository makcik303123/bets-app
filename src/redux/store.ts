import { configureStore } from "@reduxjs/toolkit";
import authUidReducer from "./slices/authUidSlice";
import activeValueRducer from "./slices/activeValueSlice";
import getUserDataReducer from "./slices/userSlice";
import betSlipListReducer from "./slices/betSlipListSlice";

export const store = configureStore({
	reducer: {
		authUidReducer,
		activeValueRducer,
		getUserDataReducer,
		betSlipListReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
