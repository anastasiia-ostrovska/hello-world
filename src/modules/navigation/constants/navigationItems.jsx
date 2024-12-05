import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
