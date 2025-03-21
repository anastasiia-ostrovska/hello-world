import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorItem {
  id: string;
  message: string;
}

interface ErrorState {
  errors: ErrorItem[];
}

const initialState: ErrorState = {
  errors: [],
};

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  selectors: {
    selectAllErrorNotifications: (state) => state.errors,
    selectFirstErrorNotification: (state) => state.errors[0] || null,
  },
  reducers: {
    notifyErrorMessage: (state, action: PayloadAction<string>) => {
      state.errors.push({ id: crypto.randomUUID(), message: action.payload });
    },
    removeErrorNotification: (state, action: PayloadAction<string>) => {
      state.errors = state.errors.filter(
        (error) => error.id !== action.payload
      );
    },
    clearAllErrorNotifications: (state) => {
      state.errors = [];
    },
  },
});

export const { selectAllErrorNotifications, selectFirstErrorNotification } =
  errorSlice.selectors;
export const {
  notifyErrorMessage,
  removeErrorNotification,
  clearAllErrorNotifications,
} = errorSlice.actions;
export default errorSlice;
