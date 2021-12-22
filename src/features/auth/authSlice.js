import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://lilolave.herokuapp.com';

export const login = createAsyncThunk('auth/login', async (state, action) => {
  const data = await fetch(`${url}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state),
  });
  const json = await data.json();
  return json;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: localStorage.getItem('lilolaveAuthToken') ? true : false,
    hasError: false,
    token: localStorage.getItem('lilolaveAuthToken') || '',
    errorMsg: '',
    isLoading: false,
  },
  reducers: {
    clearAuth: () => {
      localStorage.removeItem('lilolaveAuthToken');
      return { isAuth: false, hasError: false, token: '' };
    },
    resetError: (state, action) => {
      state.errorMsg = '';
      state.hasError = '';
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isAuth = false;
      state.hasError = false;
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.success) {
        state.token = action.payload.token;
        localStorage.setItem('lilolaveAuthToken', action.payload.token);
        state.isAuth = true;
        state.hasError = false;
      } else {
        state.hasError = true;
        state.errorMsg =
          'We were unable to authenticate you. Are you really Diana?';
      }
    },
    [login.rejected]: (state, action) => {
      state.hasError = true;
      state.errorMsg =
        'There appears to be a problem with the server, please try again later.';
      state.isLoading = false;
    },
  },
});

export const { clearAuth, resetError } = authSlice.actions;

export const selectAuth = (state) => state.auth.token;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => {
  const hasError = state.auth.hasError;
  const errorMsg = state.auth.errorMsg;
  return { hasError, errorMsg };
};

export default authSlice.reducer;
