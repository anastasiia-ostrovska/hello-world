import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app_Wrapper}>
      <Header />
      <Navigation />
      <Content />
    </div>
  );
};

export default App;
