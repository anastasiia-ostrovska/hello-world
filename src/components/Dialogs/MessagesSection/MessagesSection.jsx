import { connect } from 'react-redux';
import {
  updateNewMessageText,
  sendNewMessage,
} from '../../../redux/reducers/dialogsReducer';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

import styles from './MessagesSection.module.css';

const MessagesSection = ({
  messages,
  newMessageText,
  updateNewMessageText: updateMessageText,
  sendNewMessage: sendMessage,
}) => {
  const handleUpdateNewMessageText = (event) => {
    const messageText = event.target.value;
    updateMessageText(messageText);
  };

  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList messages={messages} />
      <NewMessage
        value={newMessageText}
        onChange={handleUpdateNewMessageText}
        onCLick={sendMessage}
        placeholder="Message ..."
      />
    </div>
  );
};

const mapState = ({ dialogsPage }) => ({
  messages: dialogsPage.messages,
  newMessageText: dialogsPage.newMessageText,
});

export default connect(mapState, { updateNewMessageText, sendNewMessage })(
  MessagesSection
);
