import Stack from '@mui/material/Stack';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const LogoutIcon = ({ iconSize }) => {
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

export default LogoutIcon;
