import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuthUserData } from '@reducers/authReducer';

import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthorized, data } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setAuthUserData());
  }, []);

  return (
    <header className={styles.header}>
      <img
        src="https://logodix.com/logo/489190.png"
        alt="social network logo"
      />
      {isAuthorized ? (
        <div>{data.login}</div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </header>
  );
};

export default Header;
