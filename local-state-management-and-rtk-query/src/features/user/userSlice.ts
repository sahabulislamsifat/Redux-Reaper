import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import type { IUser } from "@/types";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "sdhsdhasidhasd",
      title: "Sifat",
    },
    {
      id: "awsdsdsodjs",
      title: "Islam",
    },
  ],
};

// Helper function (can rename if needed)
const createUser = (userData: Omit<IUser, "id">): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<IUser, "id">>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
