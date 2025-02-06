import { profileNavItems } from '@/modules/navigation/config/navigation-items';
import { LogOutButton } from '@/modules/auth';
import useProfileNavbar from '@/modules/navigation/hooks/ui/useProfileNavbar';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';
import ProfileMenuButton from '@/modules/navigation/ui/components/ProfileMenuButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ProfileNavItem from '@/modules/navigation/ui/components/ProfileNavItem';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';

interface ProfileNavbarProps {
  iconSize: number;
}

const ProfileNavbar = ({ iconSize }: ProfileNavbarProps) => {
  const { anchorEl, isMenuOpen, handleMenuButtonClick, handleMenuClose } =
    useProfileNavbar();
  const handleNavigate = useNavigateToPath();

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
        elevation={5}
        sx={{ mt: 2 }}
        disableScrollLock
      >
        <NavigationList
          items={profileNavItems}
          NavigationItem={ProfileNavItem}
          onClick={handleNavigate}
        />
        <Divider />
        <LogOutButton iconSize={iconSize} />
      </Menu>
    </Box>
  );
};

export default ProfileNavbar;
