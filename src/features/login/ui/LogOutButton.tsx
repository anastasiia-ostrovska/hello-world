import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import useLogOut from '../model/useLogOut';

const LogoutIcon = ({ iconSize }: { iconSize: number }) => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: iconSize,
        width: iconSize,
        borderRadius: '50%',
      }}
    >
      <AccountCircleRoundedIcon />
    </Stack>
  );
};

const LogOutButton = ({ iconSize }: { iconSize: number }) => {
  const { handleLogOut, isLogOutRequestLoading } = useLogOut();

  return (
    <Chip
      component="button"
      disabled={isLogOutRequestLoading}
      clickable
      variant="outlined"
      label="Log out"
      aria-label="Log out"
      color="error"
      avatar={<LogoutIcon iconSize={iconSize} />}
      onClick={handleLogOut}
      sx={{ display: 'flex', justifySelf: 'center', pl: '3px' }}
    />
  );
};

export default LogOutButton;
