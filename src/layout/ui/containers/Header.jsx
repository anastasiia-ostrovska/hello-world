import { TOP_NAVIGATION } from '@/modules/navigation/constants/navigationItems';
import { ModeSwitcher } from '@/modules/mode-switcher';
import AppBar from '@mui/material/AppBar';
import TopNavItems from '@/modules/navigation/ui/components/TopNavItems';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      color="inherit"
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
      }}
    >
      <TopNavItems navItems={TOP_NAVIGATION} />
      <Box sx={{ display: 'flex' }}>
        <ModeSwitcher />
      </Box>
    </AppBar>
  );
};

export default Header;
