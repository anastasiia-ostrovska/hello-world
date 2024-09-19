import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/users">My Network</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/saved">Saved</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
