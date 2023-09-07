import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import activeValueRducer from "./slices/activeValueSlice";

export default configureStore({
	reducer: {
		authReducer,
		activeValueRducer,
	},
});
