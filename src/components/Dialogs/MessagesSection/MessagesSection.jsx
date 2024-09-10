import MessagesList from './MessagesList/MessagesList';

import styles from './MessagesSection.module.css';

const messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How ere you?' },
  { id: 3, message: 'Hi! I`m fine!' },
  { id: 4, message: 'What an interesting dialog!' },
  { id: 5, message: 'That`s what she said)' },
];

const MessagesSection = () => {
  return (
    <div className={styles.messages_wrapper}>
      <p>Mb info about user</p>
      <MessagesList messages={messages} />
    </div>
  );
};

export default MessagesSection;
