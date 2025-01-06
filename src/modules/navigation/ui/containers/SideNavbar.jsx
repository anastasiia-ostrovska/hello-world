import { mainNavItems } from '@/modules/navigation/config/navigation-items';
import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';

const SideNavbar = () => {
  const handleNavigate = useNavigateToPath();

  return (
    <Paper
      component="nav"
      elevation={2}
      sx={{ position: 'fixed', width: '180px' }}
    >
      <List>
        <NavigationList
          items={mainNavItems}
          type={NAVIGATION_TYPE.SIDE}
          onClick={handleNavigate}
        />
      </List>
    </Paper>
  );
};

export default SideNavbar;
