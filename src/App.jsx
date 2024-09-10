import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <Navigation />
      <main className={styles.content_wrapper}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs/*" element={<Dialogs />} />
          <Route path="music" element={<Music />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
