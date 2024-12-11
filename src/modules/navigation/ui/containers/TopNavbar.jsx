import { TOP } from '@/modules/navigation/constants/navigation-config';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navigation-types';
import Box from '@mui/material/Box';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import ProfileNavbar from '@/modules/navigation/ui/containers/ProfileNavbar';

const TopNavbar = () => {
  const handleNavigate = useNavigationHandler();

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: { sm: 150 },
        mr: '-8px',
      }}
    >
      <NavItemsList
        navItems={TOP}
        type={NAVIGATION_TYPES.TOP}
        onClick={handleNavigate}
      />
      <ProfileNavbar iconSize={24} />
    </Box>
  );
};

export default TopNavbar;
