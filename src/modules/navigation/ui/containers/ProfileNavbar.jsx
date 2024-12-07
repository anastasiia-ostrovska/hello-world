import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import useProfileNavbar from '@/modules/navigation/hooks/useProfileNavbar';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import ProfileMenuButton from '@/modules/navigation/ui/components/ProfileMenuButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';

const ProfileNavbar = ({ navItems }) => {
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
        <ProfileMenuButton size={24} onClick={handleMenuButtonClick} />
      </Box>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'profile-menu-button',
        }}
      >
        <NavItemsList
          navItems={navItems}
          type={NAVIGATION_TYPES.PROFILE}
          onClick={handleMenuItemClick}
        />
      </Menu>
    </Box>
  );
};

export default ProfileNavbar;
