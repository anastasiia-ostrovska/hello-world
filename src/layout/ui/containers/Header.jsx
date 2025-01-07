import { ModeSwitcher } from '@/modules/theme';
import { TopNavbar } from '@/modules/navigation';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Header = ({ isAuth }) => {
  return (
    <Paper
      component="header"
      position="fixed"
      elevation={2}
      square
      sx={{
        position: 'fixed',
        zIndex: 1,
        top: 0,
        right: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
        px: 'inherit',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <ModeSwitcher />
      </Box>
      {isAuth ? <TopNavbar /> : <div>lOGIN</div>}
    </Paper>
  );
};

export default Header;
