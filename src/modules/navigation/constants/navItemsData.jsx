import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import * as ROUTES from './routes';

export const MAIN_NAVIGATION = [
  { id: 'home', path: ROUTES.HOME, label: 'Home', icon: <HomeIcon /> },
  {
    id: 'network',
    path: ROUTES.NETWORK,
    label: 'My Network',
    icon: <GroupIcon />,
  },
  {
    id: 'new-post',
    path: ROUTES.NEW_POST,
    label: 'New Post',
    icon: <AddBoxIcon />,
  },
  {
    id: 'favourites',
    path: ROUTES.FAVOURITES,
    label: 'Favourites',
    icon: <FavoriteIcon />,
  },
];

export const TOP_NAVIGATION = [
  {
    id: 'dialogs',
    path: ROUTES.DIALOGS,
    label: 'Dialogs',
    icon: <EmailIcon />,
  },
  {
    id: 'notifications',
    path: ROUTES.NOTIFICATIONS,
    label: 'Notifications',
    icon: <NotificationsIcon />,
  },
];

export const PROFILE_NAVIGATION = [
  {
    id: 'profile',
    path: ROUTES.PROFILE,
    label: 'Profile',
    icon: <AccountCircleIcon />,
  },
  {
    id: 'library',
    path: ROUTES.LIBRARY,
    label: 'Library',
    icon: <TurnedInIcon />,
  },
  {
    id: 'settings',
    path: ROUTES.SETTINGS,
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];
