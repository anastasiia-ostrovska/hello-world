import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <Navigation />
      <main className={styles.content_wrapper}>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
