import { TOP_NAVIGATION } from '@/modules/navigation/constants/navItemsData';
import { ModeSwitcher } from '@/modules/mode-switcher';
import { TopNavbar } from '@/modules/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar
      component="header"
      position="fixed"
      color="inherit"
      variant="outlined"
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
      }}
    >
      <TopNavbar navItems={TOP_NAVIGATION} />
      <Box sx={{ display: 'flex' }}>
        <ModeSwitcher />
      </Box>
    </AppBar>
  );
};

export default Header;
