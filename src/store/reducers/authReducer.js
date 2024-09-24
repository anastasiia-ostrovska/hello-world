import { getAuthData } from '@api/api-requests';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  isAuthorized: false,
  status: 'idle',
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.data = action.payload;
      state.isAuthorized = true;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

const { actions, reducer } = authReducer;

export const { setAuthData, setStatus } = actions;

export const setAuthUserData = () => async (dispatch) => {
  dispatch(setStatus('loading'));

  try {
    const data = await getAuthData();

    if (data.resultCode === 0) {
      dispatch(setStatus('idle'));
      dispatch(setAuthData(data.data));
    }
  } catch (error) {
    dispatch(setStatus('error'));
  }
};

export default reducer;
