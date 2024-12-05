import { useProfileData } from '@/modules/users';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import Box from '@mui/material/Box';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';
import ProfileNavItem from '@/modules/navigation/ui/components/ProfileNavItem';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';

const TopNavbar = ({ navItems }) => {
  const { data, isLoading } = useProfileData();

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavItemsList navItems={navItems} type={NAVIGATION_TYPES.TOP} />
      </Box>

      {isLoading ? (
        <IconButton>
          <CircularProgress size={24} />
        </IconButton>
      ) : (
        <ProfileNavItem
          name={data.fullName}
          src={data.photos.small}
          onClick={() => alert('show profile')}
        />
      )}
    </>
  );
};

export default TopNavbar;
