import MessagesList from './MessagesList/MessagesList';

import styles from './MessagesSection.module.css';

const MessagesSection = ({ messages }) => {
  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList messages={messages} />
    </div>
  );
};

export default MessagesSection;
