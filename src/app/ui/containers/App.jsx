import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';

const Components = lazy(() => import('@/components-presentation/Components'));

const Layout = lazy(() =>
  import('@/layout').then((module) => ({ default: module.Layout }))
);
const Dialogs = lazy(() => import('@components/Dialogs/Dialogs'));
const Saved = lazy(() => import('@components/Saved/Saved'));
const News = lazy(() => import('@components/News/News'));
const Settings = lazy(() => import('@components/Settings/Settings'));
const Users = lazy(() => import('@components/Users/Users'));
const ProfileContainer = lazy(
  () => import('@components/Profile/ProfileContainer')
);

const App = () => {
  return (
    <Suspense fallback={<LinearPreloader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProfileContainer />} />
          <Route path="profile/:userId?" element={<ProfileContainer />} />
          <Route path="dialogs/*" element={<Dialogs />} />
          <Route path="users" element={<Users />} />
          <Route path="saved" element={<Saved />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/components" element={<Components />} />
      </Routes>
    </Suspense>
  );
};

export default App;
