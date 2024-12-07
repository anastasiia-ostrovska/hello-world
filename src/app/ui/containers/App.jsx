import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from '@/modules/navigation';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';

const Components = lazy(() => import('@/components-presentation/Components'));

const Layout = lazy(() =>
  import('@/layout').then((module) => ({ default: module.Layout }))
);
const Dialogs = lazy(() => import('@components/Dialogs/Dialogs'));
const Notifications = lazy(() => import('@/pages/Notifications'));
const Home = lazy(() => import('@components/News/News'));
const Network = lazy(() => import('@components/Users/Users'));
const NewPost = lazy(() => import('@/pages/NewPost'));
const Favourites = lazy(() => import('@components/Saved/Saved'));
const ProfileContainer = lazy(
  () => import('@components/Profile/ProfileContainer')
);
const Library = lazy(() => import('@/pages/Library'));
const Settings = lazy(() => import('@/pages/Settings'));

const App = () => {
  return (
    <Suspense fallback={<LinearPreloader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProfileContainer />} />
          <Route path={ROUTES.DIALOGS} element={<Dialogs />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.NETWORK} element={<Network />} />
          <Route path={ROUTES.NEW_POST} element={<NewPost />} />
          <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
          <Route
            path={`${ROUTES.PROFILE}/:userId?`}
            element={<ProfileContainer />}
          />
          <Route path={ROUTES.LIBRARY} element={<Library />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>
        <Route path="/components" element={<Components />} />
      </Routes>
    </Suspense>
  );
};

export default App;
