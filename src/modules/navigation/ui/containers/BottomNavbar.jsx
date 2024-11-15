import { SIDE_NAVIGATION } from '@/modules/navigation/constants/navigation';
import useNavbarClick from '@/modules/navigation/hooks/useNavbarClick';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNavbar = () => {
  const [activeIndex, handleNavigationChange, handleNavigation] =
    useNavbarClick(0);

  return (
    <Paper
      elevation={3}
      square
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation
        value={activeIndex}
        onChange={handleNavigationChange}
        sx={{ backgroundColor: 'transparent' }}
      >
        {SIDE_NAVIGATION.map((item) => {
          const { label, icon, path } = item;
          return (
            <BottomNavigationAction
              key={label}
              label={label}
              icon={icon}
              onClick={() => handleNavigation(path)}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
