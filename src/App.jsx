import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = ({ dialogs, messages }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="dialogs/*"
          element={<Dialogs dialogs={dialogs} messages={messages} />}
        />
        <Route path="music" element={<Music />} />
        <Route path="news" element={<News />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
