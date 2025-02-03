import { mainNavItems } from '@/modules/navigation/config/navigation-items';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavItem from '@/modules/navigation/ui/components/BottomNavItem';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';

const BottomNavbar = () => {
  const handleNavigate = useNavigateToPath();

  return (
    <Paper
      component="nav"
      square
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        <NavigationList
          items={mainNavItems}
          NavigationItem={BottomNavItem}
          onClick={handleNavigate}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
