import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Saved from './components/Saved/Saved';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dialogs/*" element={<Dialogs />} />
        <Route path="users" element={<Users />} />
        <Route path="saved" element={<Saved />} />
        <Route path="news" element={<News />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
