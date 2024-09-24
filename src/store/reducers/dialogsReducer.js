import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dialogs: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Vlad' },
    { id: 3, name: 'Eugenia' },
    { id: 4, name: 'Oleksandr' },
    { id: 5, name: 'Valeria' },
    { id: 6, name: 'Oleksiy' },
    { id: 7, name: 'Denys' },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How ere you?' },
    { id: 3, message: 'Hi! I`m fine!' },
    { id: 4, message: 'Working om my proj' },
    { id: 5, message: 'Good luck with it!' },
  ],
};

const dialogsReducer = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    sendNewMessage(state, action) {
      const message = { id: 6, message: action.payload };
      state.messages.push(message);
    },
  },
});

const { actions, reducer } = dialogsReducer;

export const { sendNewMessage } = actions;

export default reducer;
