import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>;
        </li>
        <li>
          <NavLink to="/dialogs">Dialogs</NavLink>;
        </li>
        <li>
          <NavLink to="/news">News</NavLink>;
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>;
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>;
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
