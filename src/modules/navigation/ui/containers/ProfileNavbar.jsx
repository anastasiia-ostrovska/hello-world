import { profileNavItems } from '@/modules/navigation/config/navigation-items';
import { LogoutButton } from '@/modules/auth';
import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
import useProfileNavbar from '@/modules/navigation/hooks/ui/useProfileNavbar';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';
import ProfileMenuButton from '@/modules/navigation/ui/components/ProfileMenuButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const ProfileNavbar = ({ iconSize }) => {
  const {
    anchorEl,
    isMenuOpen,
    handleMenuButtonClick,
    handleMenuItemClick,
    handleMenuClose,
  } = useProfileNavbar();

  return (
    <Box>
      <Box
        id="profile-menu-button"
        aria-controls={isMenuOpen ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : undefined}
      >
        <ProfileMenuButton size={iconSize} onClick={handleMenuButtonClick} />
      </Box>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'profile-menu-button',
        }}
        elevation={5}
        sx={{ mt: 2 }}
        disableScrollLock
      >
        <NavigationList
          items={profileNavItems}
          type={NAVIGATION_TYPE.PROFILE}
          onClick={handleMenuItemClick}
        />
        <Divider />
        <LogoutButton iconSize={iconSize} />
      </Menu>
    </Box>
  );
};

export default ProfileNavbar;
