import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import Box from '@mui/material/Box';
import useNavbar from '@/modules/navigation/hooks/useNavbar';
import useNavItemColor from '@/modules/navigation/hooks/useNavItemColor';

const TopNavItems = ({ navItems }) => {
  const { getIsActive, handleNavItemClick } = useNavbar();
  const getNavItemColor = useNavItemColor();

  return (
    <Box sx={{ display: 'flex' }}>
      <NavItemsList
        navItems={navItems}
        handleNavItemClick={handleNavItemClick}
        getIsActive={getIsActive}
        getNavItemColor={getNavItemColor}
        type="top"
        ariaLabel="Show" // write a fn to find out
        count={4} // mocked
      />
    </Box>
  );
};

export default TopNavItems;
