import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

export const MAIN_NAVIGATION = [
  { id: 'news', path: '/news', label: 'Home', icon: <HomeIcon /> },
  {
    id: 'users',
    path: '/users',
    label: 'My Network',
    icon: <GroupIcon />,
  },
  {
    id: 'create-post',
    path: '/create-post',
    label: 'New Post',
    icon: <AddBoxIcon />,
  },
  {
    id: 'favourites',
    path: '/favourites',
    label: 'Favourites',
    icon: <FavoriteIcon />,
  },
];

export const TOP_NAVIGATION = [
  { id: 'dialogs', path: '/dialogs', label: 'Dialogs', icon: <EmailIcon /> },
  {
    id: 'notifications',
    path: '/notifications',
    label: 'Notifications',
    icon: <NotificationsIcon />,
  },
];

export const LAYOUT_NAVIGATION = [...MAIN_NAVIGATION, ...TOP_NAVIGATION];
