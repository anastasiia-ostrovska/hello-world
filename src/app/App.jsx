import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from '@/modules/navigation';
import Layout from '@/layout';
import PageFallback from '@/modules/loaders/ui/containers/PageFallback';
import Components from '@/components-presentation/Components';

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageFallback />}>
              <ProfileContainer />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.DIALOGS}
          element={
            <Suspense fallback={<PageFallback />}>
              <Dialogs />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.NOTIFICATIONS}
          element={
            <Suspense fallback={<PageFallback />}>
              <Notifications />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <Suspense fallback={<PageFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.NETWORK}
          element={
            <Suspense fallback={<PageFallback />}>
              <Network />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.NEW_POST}
          element={
            <Suspense fallback={<PageFallback />}>
              <NewPost />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.FAVOURITES}
          element={
            <Suspense fallback={<PageFallback />}>
              <Favourites />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.PROFILE}/:userId?`}
          element={
            <Suspense fallback={<PageFallback />}>
              <ProfileContainer />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.LIBRARY}
          element={
            <Suspense fallback={<PageFallback />}>
              <Library />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SETTINGS}
          element={
            <Suspense fallback={<PageFallback />}>
              <Settings />
            </Suspense>
          }
        />
        <Route path="/loader" element={<PageFallback />} />
      </Route>
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default App;
