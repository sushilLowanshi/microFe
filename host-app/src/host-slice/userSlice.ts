// host/src/slice/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
  id: number;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
}

interface UserState {
  list: User[];
}

const initialState: UserState = {
  list: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      console.log(action.payload, 'action.payload')
      state.list?.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      state.list = state.list.filter((value) => value.id != action.payload.id);
    },

  },
});

export const { addUser, deleteUser } = userSlice.actions;

// Selector for convenience
export const selectUserList = (state: RootState) => state.user.list;

export default userSlice.reducer;
