import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  error: Error | null;
  message: string;
}

const initialState: ErrorState = {
  error: null,
  message: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  selectors: {
    selectError: (state) => state.error,
    selectErrorMessage: (state) => state.message,
  },
  reducers: {
    setError: (state, action: PayloadAction<ErrorState['error']>) => {
      state.error = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<ErrorState['message']>) => {
      state.message = action.payload;
    },
  },
});

export const { selectError, selectErrorMessage } = errorSlice.selectors;
export const { setError, setErrorMessage } = errorSlice.actions;
export default errorSlice;
