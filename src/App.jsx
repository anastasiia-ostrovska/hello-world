import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Saved from './components/Saved/Saved';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<ProfileContainer />} />
        <Route path="profile/:userId?" element={<ProfileContainer />} />
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
