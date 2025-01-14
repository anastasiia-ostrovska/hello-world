import { topNavItems } from '@/modules/navigation/config/navigation-items';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';
import Box from '@mui/material/Box';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';
import TopNavItem from '@/modules/navigation/ui/components/TopNavItem';
import ProfileNavbar from '@/modules/navigation/ui/containers/ProfileNavbar';

const TopNavbar = () => {
  const handleNavigate = useNavigateToPath();

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
      <NavigationList
        items={topNavItems}
        NavigationItem={TopNavItem}
        onClick={handleNavigate}
      />
      <ProfileNavbar iconSize={24} />
    </Box>
  );
};

export default TopNavbar;
