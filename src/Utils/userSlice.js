import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    addUserInfo: (state, action) => {
      return  { userInfo: action.payload }
    },
    removeUserInfo: () => {
      return { userInfo: null };
    }
  }
});

export const { addUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;