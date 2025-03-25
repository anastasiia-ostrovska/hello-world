import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '@app/store';
import {
  getStoredToken,
  removeStoredToken,
  setStoredToken,
} from '@shared/api/model/tokenStorageHandlers';

const token = getStoredToken();

const initialState = {
  token,
};

const tokenSlice = createSlice({
  name: 'auth',
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

const { addToken, removeToken } = tokenSlice.actions;

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

export const { selectAccessToken } = tokenSlice.selectors;
export default tokenSlice;
