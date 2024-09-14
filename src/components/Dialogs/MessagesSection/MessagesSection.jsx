import { connect } from 'react-redux';
import {
  updateNewMessageText,
  sendMessage,
} from '../../../redux/reducers/dialogsReducer';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

import styles from './MessagesSection.module.css';

const MessagesSection = ({
  messages,
  newMessageText,
  handleUpdateNewMessageText,
  handleSendMessage,
}) => {
  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList messages={messages} />
      <NewMessage
        value={newMessageText}
        onChange={handleUpdateNewMessageText}
        onCLick={handleSendMessage}
        placeholder="Message ..."
      />
    </div>
  );
};

const mapState = ({ dialogsPage }) => ({
  messages: dialogsPage.messages,
  newMessageText: dialogsPage.newMessageText,
});

const mapDispatch = (dispatch) => {
  return {
    handleUpdateNewMessageText: (event) => {
      const newMessageText = event.target.value;
      dispatch(updateNewMessageText(newMessageText));
    },
    handleSendMessage: () => {
      dispatch(sendMessage());
    },
  };
};

export default connect(mapState, mapDispatch)(MessagesSection);
