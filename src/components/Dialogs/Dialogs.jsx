import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={styles.dialogs_wrapper}>
      <div className={styles.dialogs_list}>
        <p>Mb search bar</p>
        <ul>
          <li>User1</li>
          <li>User2</li>
          <li>User3</li>
          <li>User4</li>
          <li>User5</li>
        </ul>
      </div>
      <div className={styles.messages_wrapper}>
        <p>Mb info about user</p>
        <ul className={styles.list}>
          <li>Hi!</li>
          <li>How ere you?</li>
          <li>Hi! I`m fine!</li>
          <li>What an interesting dialog!</li>
          <li>That`s what she said)</li>
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
