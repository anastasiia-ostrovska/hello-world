import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '@app/store';
import {
  getStoredToken,
  removeStoredToken,
  setStoredToken,
} from './tokenStorageHandlers';

const initialState = {
  token: getStoredToken(),
};

const authSlice = createSlice({
  name: 'accessToken',
  initialState,
  selectors: {
    selectAccessToken: (state) => state.token,
  },
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

const { addToken, removeToken } = authSlice.actions;

export const storeAccessToken =
  (token: string): AppThunk =>
  (dispatch) => {
    dispatch(addToken(token));
    setStoredToken(token);
  };

export const removeAccessToken = (): AppThunk => (dispatch) => {
  dispatch(removeToken());
  removeStoredToken();
};

export const { selectAccessToken } = authSlice.selectors;
export default authSlice;
