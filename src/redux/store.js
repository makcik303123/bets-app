import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import activeValueRducer from "./slices/activeValueSlice";
import getUserDataReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    authReducer,
    activeValueRducer,
    getUserDataReducer,
  },
});
