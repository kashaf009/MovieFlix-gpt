import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: null,

  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { adduser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
