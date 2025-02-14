import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import * as ROUTES from '@/shared/router';
import { NavigationItem } from '../model/types';

export const TOP_NAV_ITEMS: NavigationItem[] = [
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
