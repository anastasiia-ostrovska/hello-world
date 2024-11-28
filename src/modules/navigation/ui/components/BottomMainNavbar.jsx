import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomMainNavbar = ({
  navItems,
  activeIndex,
  handleNavItemClick,
  getNavItemColor,
}) => {
  return (
    <Paper
      elevation={3}
      square
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation
        value={activeIndex}
        sx={{ backgroundColor: 'transparent' }}
      >
        {navItems.map((item, index) => {
          const { label, icon, path } = item;
          const isActive = activeIndex === index;

          return (
            <BottomNavigationAction
              key={label}
              label={label}
              icon={icon}
              onClick={() => handleNavItemClick(index, path)}
              sx={{ color: getNavItemColor(isActive) }}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomMainNavbar;
