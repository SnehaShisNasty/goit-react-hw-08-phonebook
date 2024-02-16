import { createSlice } from '@reduxjs/toolkit';
import { signup, login } from './auth-operations';
const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};
const loadingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

const errorReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, loadingReducer)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.rejected, errorReducer)
      .addCase(login.pending, loadingReducer)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, errorReducer);
  },
});
export default authSlice.reducer;
