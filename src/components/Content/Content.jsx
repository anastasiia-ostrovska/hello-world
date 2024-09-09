import Profile from './Profile/Profile';

import styles from './Content.module.css';

const Content = () => {
  return (
    <main className={styles.content}>
      <Profile />
    </main>
  );
};

export default Content;
