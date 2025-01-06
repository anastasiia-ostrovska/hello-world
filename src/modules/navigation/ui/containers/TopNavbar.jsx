import { topNavItems } from '@/modules/navigation/config/navigation-items';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';
import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
import Box from '@mui/material/Box';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';
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
        type={NAVIGATION_TYPE.TOP}
        onClick={handleNavigate}
      />
      <ProfileNavbar iconSize={24} />
    </Box>
  );
};

export default TopNavbar;
