import {
  PROFILE_NAVIGATION,
  TOP_NAVIGATION,
} from '@/modules/navigation/constants/navItemsData';
import { ModeSwitcher } from '@/modules/mode-switcher';
import { TopNavbar } from '@/modules/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ProfileNavbar from '@/modules/navigation/ui/containers/ProfileNavbar';

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
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <ModeSwitcher />
      </Box>
      <TopNavbar navItems={TOP_NAVIGATION}>
        <ProfileNavbar navItems={PROFILE_NAVIGATION} iconSize={24} />
      </TopNavbar>
    </AppBar>
  );
};

export default Header;
