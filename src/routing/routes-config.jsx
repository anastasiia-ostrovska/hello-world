import { lazy } from 'react';
import ProfileContainer from '@/_old-version/components/Profile/ProfileContainer';
import SuspenseRoute from '../shared/components/SuspenseRoute';
import * as ROUTES from './routing-paths';

const Dialogs = lazy(() => import('@/_old-version/components/Dialogs/Dialogs'));
const Notifications = lazy(() => import('@/pages/Notifications'));
const Home = lazy(() => import('@/pages/Home'));
const Network = lazy(() => import('@/pages/Network'));
const NewPost = lazy(() => import('@/pages/NewPost'));
const Favourites = lazy(() => import('@/pages/Favourites'));
const Library = lazy(() => import('@/pages/Library'));
const Settings = lazy(() => import('@/pages/Settings'));

const Components = lazy(
  () => import('@/_old-version/components-presentation/Components')
);

const ROUTES_CONFIG = [
  {
    path: `${ROUTES.PROFILE}/:userId?`,
    element: <ProfileContainer />,
  },
  { path: ROUTES.DIALOGS, element: <SuspenseRoute element={<Dialogs />} /> },
  {
    path: ROUTES.NOTIFICATIONS,
    element: <SuspenseRoute element={<Notifications />} />,
  },
  { path: ROUTES.HOME, element: <SuspenseRoute element={<Home />} /> },
  { path: ROUTES.NETWORK, element: <SuspenseRoute element={<Network />} /> },
  { path: ROUTES.NEW_POST, element: <SuspenseRoute element={<NewPost />} /> },
  {
    path: ROUTES.FAVOURITES,
    element: <SuspenseRoute element={<Favourites />} />,
  },
  { path: ROUTES.LIBRARY, element: <SuspenseRoute element={<Library />} /> },
  { path: ROUTES.SETTINGS, element: <SuspenseRoute element={<Settings />} /> },

  { path: '/components', element: <SuspenseRoute element={<Components />} /> },
];

export default ROUTES_CONFIG;
