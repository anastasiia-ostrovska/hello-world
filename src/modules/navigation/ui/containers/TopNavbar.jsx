import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import Box from '@mui/material/Box';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import ProfileNavItem from '@/modules/navigation/ui/components/ProfileNavItem';

const TopNavbar = ({ navItems }) => {
  const handleProfileIconClick = () => {
    alert('show profile');
  };

  return (
    <Box component="nav">
      <NavItemsList navItems={navItems} type={NAVIGATION_TYPES.TOP} />
      <ProfileNavItem size={24} onClick={handleProfileIconClick} />
    </Box>
  );
};

export default TopNavbar;
