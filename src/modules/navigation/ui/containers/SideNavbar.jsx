import { MAIN_NAVIGATION } from '@/modules/navigation/constants/navItemsData';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const SideNavbar = () => {
  const handleNavigate = useNavigationHandler();

  return (
    <Paper
      component="nav"
      elevation={3}
      sx={{ position: 'fixed', width: '180px' }}
    >
      <List>
        <NavItemsList
          navItems={MAIN_NAVIGATION}
          type={NAVIGATION_TYPES.SIDE}
          onClick={handleNavigate}
        />
      </List>
    </Paper>
  );
};

export default SideNavbar;
