import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import Box from '@mui/material/Box';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const TopNavbar = ({ navItems, children }) => {
  const handleNavItemClick = useNavigationHandler();

  return (
    <Box component="nav" sx={{ display: 'flex' }}>
      <NavItemsList
        navItems={navItems}
        type={NAVIGATION_TYPES.TOP}
        onClick={handleNavItemClick}
      />
      {children}
    </Box>
  );
};

export default TopNavbar;
