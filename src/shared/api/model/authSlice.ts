import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '@app/store';
import {
  getStoredToken,
  removeStoredToken,
  setStoredToken,
} from '@shared/api/model/tokenStorageHandlers';

const initialState = {
  token: getStoredToken(),
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectAccessToken: (state) => state.token,
    selectIsAuth: (state) => state.isAuth,
  },
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
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

export const { setIsAuth } = authSlice.actions;
export const { selectAccessToken, selectIsAuth } = authSlice.selectors;
export default authSlice;
