import MessagesList from './MessagesList/MessagesList';

import styles from './MessagesSection.module.css';

const MessagesSection = () => {
  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList />
    </div>
  );
};

export default MessagesSection;
