import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';

const BottomNavContainer = ({ children }) => {
  return (
    <Paper
      component="nav"
      square
      variant="outlined"
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        {children}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavContainer;
