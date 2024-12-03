import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const BottomMainNavbar = ({
  navItems,
  handleNavItemClick,
  getIsActive,
  getNavItemColor,
}) => {
  return (
    <Paper
      component="nav"
      square
      variant="outlined"
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        <NavItemsList
          navItems={navItems}
          handleNavItemClick={handleNavItemClick}
          getIsActive={getIsActive}
          getNavItemColor={getNavItemColor}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomMainNavbar;
