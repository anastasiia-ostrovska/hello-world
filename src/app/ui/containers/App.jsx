import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from '@/modules/navigation';
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
          <Route path={ROUTES.DIALOGS} element={<Dialogs />} />
          <Route path={ROUTES.NETWORK} element={<Users />} />
          <Route path={ROUTES.FAVOURITES} element={<Saved />} />
          <Route path={ROUTES.HOME} element={<News />} />
          <Route path="profile/:userId?" element={<ProfileContainer />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/components" element={<Components />} />
      </Routes>
    </Suspense>
  );
};

export default App;
