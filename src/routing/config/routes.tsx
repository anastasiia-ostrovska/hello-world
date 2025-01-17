import { lazy, ReactElement } from 'react';
import { SuspenseRoute } from '@/modules/loaders';
import * as ROUTES from '../constants/paths';

const Profile = lazy(
  () => import('@/_old-version/components/Profile/ProfileContainer')
);
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

interface RouteConfig {
  path: string;
  element: ReactElement;
}

const ROUTES_CONFIG: RouteConfig[] = [
  {
    path: `${ROUTES.PROFILE}/:userId?`,
    element: <SuspenseRoute element={<Profile />} />,
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
