import { configureStore } from "@reduxjs/toolkit";
import authUidReducer from "./slices/authUidSlice";
import activeValueRducer from "./slices/activeValueSlice";
import getUserDataReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    authUidReducer,
    activeValueRducer,
    getUserDataReducer,
  },
});
