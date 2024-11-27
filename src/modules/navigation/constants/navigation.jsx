import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const MAIN_NAVIGATION = [
  { label: 'Home', icon: <HomeIcon />, path: '/news' },
  {
    label: 'My Network',
    icon: <GroupIcon />,
    path: '/users',
  },
  {
    label: 'New Post',
    icon: <AddBoxIcon />,
    path: 'create-post',
  },
  {
    label: 'Favourites',
    icon: <FavoriteIcon />,
    path: 'favourites',
  },
];
