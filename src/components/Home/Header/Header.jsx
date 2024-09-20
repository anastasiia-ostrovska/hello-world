import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthUserData } from '@/redux/reducers/authReducer';

import styles from './Header.module.css';

class Header extends Component {
  componentDidMount() {
    const { setAuthUserData } = this.props;
    setAuthUserData();
  }

  render() {
    const { name, isAuthorized } = this.props;

    return (
      <header className={styles.header}>
        <img
          src="https://logodix.com/logo/489190.png"
          alt="social network logo"
        />
        {isAuthorized ? (
          <div>{name}</div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </header>
    );
  }
}

const mapState = ({ auth }) => ({
  name: auth.login,
  isAuthorized: auth.isAuthorized,
});

export default connect(mapState, { setAuthUserData })(Header);
