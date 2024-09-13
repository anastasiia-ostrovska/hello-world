const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MASSAGE = 'SEND_MASSAGE';

const initialState = {
  messagesList: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How ere you?' },
    { id: 3, message: 'Hi! I`m fine!' },
    { id: 4, message: 'What an interesting dialog!' },
    { id: 5, message: 'That`s what she said)' },
  ],
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessageText };
    case SEND_MASSAGE:
      return {
        ...state,
        messagesList: [
          ...state.messagesList,
          { id: 6, message: state.newMessageText },
        ],
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

export default messagesReducer;
