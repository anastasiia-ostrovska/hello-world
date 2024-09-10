import Message from './Message/Message';

import styles from './MessagesList.module.css';

const MessagesList = () => {
  return (
    <ul className={styles.list}>
      <Message message="Hi!" />
      <Message message="How ere you?" />
      <Message message="Hi! I`m fine!" />
      <Message message="What an interesting dialog!" />
      <Message message="That`s what she said)" />
    </ul>
  );
};

export default MessagesList;
