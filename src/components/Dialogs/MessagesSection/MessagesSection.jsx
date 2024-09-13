import { connect } from 'react-redux';
import {
  updateNewMessageText,
  sendMessage,
} from '../../../redux/reducers/messagesReducer';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

import styles from './MessagesSection.module.css';

const MessagesSection = ({
  messagesList,
  newMessageText,
  updateNewMessageText,
  sendMessage,
}) => {
  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList messages={messagesList} />
      <NewMessage
        value={newMessageText}
        onChange={updateNewMessageText}
        onCLick={sendMessage}
        placeholder="Message ..."
      />
    </div>
  );
};

const mapState = ({ messages }) => ({
  messagesList: messages.messagesList,
  newMessageText: messages.newMessageText,
});

const mapDispatch = (dispatch) => {
  return {
    updateNewMessageText: (event) => {
      const newMessageText = event.target.value;
      dispatch(updateNewMessageText(newMessageText));
    },
    sendMessage: () => {
      dispatch(sendMessage());
    },
  };
};

export default connect(mapState, mapDispatch)(MessagesSection);
