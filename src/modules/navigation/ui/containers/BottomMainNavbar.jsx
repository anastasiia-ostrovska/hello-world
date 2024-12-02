import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import MainNavItemsList from '@/modules/navigation/ui/containers/MainNavItemsList';

const BottomMainNavbar = ({
  navItems,
  activeItem,
  handleNavItemClick,
  getNavItemColor,
}) => {
  return (
    <Paper
      elevation={3}
      square
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        <MainNavItemsList
          navItems={navItems}
          activeItem={activeItem}
          handleNavItemClick={handleNavItemClick}
          getNavItemColor={getNavItemColor}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomMainNavbar;
