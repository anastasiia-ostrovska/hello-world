import { NavLink } from 'react-router-dom';
import useGetAuthDataQuery from '@reducers/authApi';

import styles from './Header.module.css';

const Header = () => {
  const { data: authData } = useGetAuthDataQuery();

  if (authData) {
    return (
      <header className={styles.header}>
        <img
          src="https://logodix.com/logo/489190.png"
          alt="social network logo"
        />
        {authData.resultCode === 0 ? (
          <div>{authData.data.login}</div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <img
        src="https://logodix.com/logo/489190.png"
        alt="social network logo"
      />
      <NavLink to="/login">Login</NavLink>
    </header>
  );
};

export default Header;
