import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    userLogout: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { userLogin,userLogout } = AuthSlice.actions;

export default AuthSlice.reducer;
