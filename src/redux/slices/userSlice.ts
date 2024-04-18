import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import type { User } from "../../types/User.type";

interface UserState {
  data: DocumentData | undefined;
}

const initialState: UserState = {
  data: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserData(state, action: PayloadAction<DocumentData | undefined>) {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserData } = userSlice.actions;

export default userSlice.reducer;
