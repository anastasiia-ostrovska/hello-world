import { NavLink } from 'react-router-dom';
import { useGetAuthDataQuery } from '@/modules/profile/store/authApi';

import TopNavbar from '@/modules/navigation/ui/containers/TopNavbar';
import { TOP } from '@/modules/navigation/constants/navigation-config';
import styles from './Header.module.css';

const Header = () => {
  const { data: authData } = useGetAuthDataQuery();

  if (authData) {
    return (
      <header className={styles.header}>
        {authData.resultCode === 0 ? (
          <>
            <div>{authData.data.login}</div>
            <TopNavbar navItems={TOP} />
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
};

export default Header;
