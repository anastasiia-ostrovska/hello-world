import Stack from '@mui/material/Stack';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

interface LogoutIconProps {
  iconSize: number;
}

const LogoutIcon = ({ iconSize }: LogoutIconProps) => {
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
