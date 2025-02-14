import { lazy, ReactElement } from 'react';
import * as ROUTES from '@/shared/router';
import RouteSuspense from '@/app/routing/ui/RouteSuspense';

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

interface PageItem {
  path: string;
  element: ReactElement;
}

const AUTH_PAGES: PageItem[] = [
  {
    path: `${ROUTES.PROFILE}/:userId?`,
    element: <RouteSuspense element={<Profile />} />,
  },
  { path: ROUTES.DIALOGS, element: <RouteSuspense element={<Dialogs />} /> },
  {
    path: ROUTES.NOTIFICATIONS,
    element: <RouteSuspense element={<Notifications />} />,
  },
  { path: ROUTES.HOME, element: <RouteSuspense element={<Home />} /> },
  { path: ROUTES.NETWORK, element: <RouteSuspense element={<Network />} /> },
  { path: ROUTES.NEW_POST, element: <RouteSuspense element={<NewPost />} /> },
  {
    path: ROUTES.FAVOURITES,
    element: <RouteSuspense element={<Favourites />} />,
  },
  { path: ROUTES.LIBRARY, element: <RouteSuspense element={<Library />} /> },
  { path: ROUTES.SETTINGS, element: <RouteSuspense element={<Settings />} /> },
];

export default AUTH_PAGES;
