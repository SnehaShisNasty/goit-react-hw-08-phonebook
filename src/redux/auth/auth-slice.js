import { createSlice } from '@reduxjs/toolkit';
import { signup, login, current } from './auth-operations';
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
        console.log(state);
        state.user = payload.user;
        console.log(state);
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.rejected, errorReducer)
      .addCase(login.pending, loadingReducer)
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(state);
        state.user = payload.user;
        console.log(state);
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, errorReducer)
      .addCase(current.pending, loadingReducer)
      .addCase(current.fulfilled, (state, { payload }) => {
        console.log(payload);
        console.log(state);
        state.user = payload.user;
        console.log(state);
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, state => {
        state.isLoading = false;
        state.token = '';
      });
  },
});
export default authSlice.reducer;
