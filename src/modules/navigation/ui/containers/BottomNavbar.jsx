import { MAIN } from '@/modules/navigation/constants/navigation-config';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navigation-types';
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
          navItems={MAIN}
          type={NAVIGATION_TYPES.BOTTOM}
          onClick={handleNavigate}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
