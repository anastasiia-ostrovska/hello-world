import { mainNavItems } from '@/modules/navigation/config/navigation-items';
import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const BottomNavbar = () => {
  const handleNavigate = useNavigationHandler();

  return (
    <Paper
      component="nav"
      square
      elevation={2}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        <NavItemsList
          navItems={mainNavItems}
          type={NAVIGATION_TYPE.BOTTOM}
          onClick={handleNavigate}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
