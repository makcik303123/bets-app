import { configureStore } from "@reduxjs/toolkit";
import authUidReducer from "./slices/authUidSlice";
import activeValueRducer from "./slices/activeValueSlice";
import getUserDataReducer from "./slices/userSlice";
import betSlipListReducer from "./slices/betSlipListSlice";

export default configureStore({
  reducer: {
    authUidReducer,
    activeValueRducer,
    getUserDataReducer,
    betSlipListReducer,
  },
});
