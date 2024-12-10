import { TOP_NAVIGATION } from '@/modules/navigation/constants/navItemsData';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import Box from '@mui/material/Box';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import ProfileNavbar from '@/modules/navigation/ui/containers/ProfileNavbar';

const TopNavbar = () => {
  const handleNavigate = useNavigationHandler();

  return (
    <Box component="nav" sx={{ display: 'flex' }}>
      <NavItemsList
        navItems={TOP_NAVIGATION}
        type={NAVIGATION_TYPES.TOP}
        onClick={handleNavigate}
      />
      <ProfileNavbar iconSize={24} />
    </Box>
  );
};

export default TopNavbar;
