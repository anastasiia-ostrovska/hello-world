import { PROFILE_NAVIGATION } from '@/modules/navigation/constants/navItemsData';
import { LogoutButton } from '@/modules/loginization';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import useProfileNavbar from '@/modules/navigation/hooks/useProfileNavbar';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
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
        onClick={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'profile-menu-button',
        }}
        elevation={3}
      >
        <NavItemsList
          navItems={PROFILE_NAVIGATION}
          type={NAVIGATION_TYPES.PROFILE}
          onClick={handleMenuItemClick}
        />
        <Divider />
        <LogoutButton avatarSize={iconSize} />
      </Menu>
    </Box>
  );
};

export default ProfileNavbar;
