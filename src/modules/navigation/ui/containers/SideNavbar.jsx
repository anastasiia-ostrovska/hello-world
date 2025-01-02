import { mainNavItems } from '@/modules/navigation/config/navigation-items';
import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const SideNavbar = () => {
  const handleNavigate = useNavigationHandler();

  return (
    <Paper
      component="nav"
      elevation={2}
      sx={{ position: 'fixed', width: '180px' }}
    >
      <List>
        <NavItemsList
          navItems={mainNavItems}
          type={NAVIGATION_TYPE.SIDE}
          onClick={handleNavigate}
        />
      </List>
    </Paper>
  );
};

export default SideNavbar;
