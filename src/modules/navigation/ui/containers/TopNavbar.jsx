import { topNavItems } from '@/modules/navigation/config/navigation-items';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
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
        navItems={topNavItems}
        type={NAVIGATION_TYPE.TOP}
        onClick={handleNavigate}
      />
      <ProfileNavbar iconSize={24} />
    </Box>
  );
};

export default TopNavbar;
