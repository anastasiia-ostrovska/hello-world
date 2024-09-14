import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://logodix.com/logo/489190.png"
        alt="social network logo"
      />
    </header>
  );
};

export default Header;
