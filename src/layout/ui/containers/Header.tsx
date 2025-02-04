import { ModeSwitcher } from '@/modules/theme';
import { TopNavbar } from '@/modules/navigation';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface HeaderProps {
  isAuth: boolean;
}

const Header = ({ isAuth }: HeaderProps) => {
  return (
    <Paper
      component="header"
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
      {isAuth ? <TopNavbar /> : <div>LOGIN</div>}
    </Paper>
  );
};

export default Header;
