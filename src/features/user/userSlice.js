import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  user: { username: "coding addict" },
  theme: "winter",
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: () => {
      console.log("Login");
    },
    logoutUser: () => {
      console.log("Logout");
    },
    toggleTheme: () => {
      console.log("Toggle Theme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
