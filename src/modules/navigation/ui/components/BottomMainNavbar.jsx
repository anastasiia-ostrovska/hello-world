import { MAIN_NAVIGATION } from '@/modules/navigation/constants/navigation';
import useNavbar from '@/modules/navigation/hooks/useNavbar';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomMainNavbar = () => {
  const [activeIndex, handleNavigationChange, navigateTo] =
    useNavbar(MAIN_NAVIGATION);

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
        {MAIN_NAVIGATION.map((item) => {
          const { label, icon, path } = item;
          return (
            <BottomNavigationAction
              key={label}
              label={label}
              icon={icon}
              onClick={() => navigateTo(path)}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomMainNavbar;
