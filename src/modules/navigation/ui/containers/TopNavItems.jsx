import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import Box from '@mui/material/Box';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';

const TopNavItems = ({ navItems }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavItemsList navItems={navItems} type={NAVIGATION_TYPES.TOP} />
    </Box>
  );
};

export default TopNavItems;
