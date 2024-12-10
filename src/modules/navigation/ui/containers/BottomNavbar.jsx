import { MAIN_NAVIGATION } from '@/modules/navigation/constants/navItemsData';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
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
      // variant="outlined"
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        <NavItemsList
          navItems={MAIN_NAVIGATION}
          type={NAVIGATION_TYPES.BOTTOM}
          onClick={handleNavigate}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
