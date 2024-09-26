import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAuthData,
  selectIsAuthorized,
  setAuthUserData,
} from '@reducers/authReducer';

import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const isAuthorized = useSelector(selectIsAuthorized);

  useEffect(() => {
    dispatch(setAuthUserData());
  }, [dispatch]);

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
