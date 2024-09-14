const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MASSAGE = 'SEND_MASSAGE';

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
    { id: 4, message: 'What an interesting dialog!' },
    { id: 5, message: 'That`s what she said)' },
  ],
  newMessageText: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessageText };
    case SEND_MASSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: state.newMessageText }],
        newMessageText: '',
      };
    default:
      return state;
  }
};

export const updateNewMessageText = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText,
});

export const sendMessage = () => ({ type: SEND_MASSAGE });

export default dialogsReducer;
