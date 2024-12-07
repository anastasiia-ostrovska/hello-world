import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import Box from '@mui/material/Box';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import ProfileMenuButton from '@/modules/navigation/ui/components/ProfileMenuButton';

const TopNavbar = ({ navItems }) => {
  const handleNavItemClick = useNavigationHandler();
  const handleProfileIconClick = () => {
    alert('show profile');
  };

  return (
    <Box component="nav">
      <NavItemsList
        navItems={navItems}
        type={NAVIGATION_TYPES.TOP}
        onClick={handleNavItemClick}
      />
      <ProfileMenuButton size={24} onClick={handleProfileIconClick} />
    </Box>
  );
};

export default TopNavbar;
