import { topNavItems } from '@/modules/navigation/config/navigation-items';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';
import NavigationList from '@/modules/navigation/ui/components/NavigationList';
import TopNavItem from '@/modules/navigation/ui/components/TopNavItem';
import ProfileNavbar from '@/modules/navigation/ui/containers/ProfileNavbar';
import Stack from '@mui/material/Stack';

const TopNavbar = () => {
  const handleNavigate = useNavigateToPath();

  return (
    <Stack
      component="nav"
      direction="row"
      spacing={{ sm: 1 }}
      sx={{ ml: 'auto', mr: '-8px' }}
    >
      <NavigationList
        items={topNavItems}
        NavigationItem={TopNavItem}
        onClick={handleNavigate}
      />
      <ProfileNavbar iconSize={24} />
    </Stack>
  );
};

export default TopNavbar;
