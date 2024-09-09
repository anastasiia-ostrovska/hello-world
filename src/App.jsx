import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';

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
