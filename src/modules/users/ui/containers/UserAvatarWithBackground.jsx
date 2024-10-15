import Box from '@mui/material/Box';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';

const UserAvatarWithBackground = ({
  name,
  avatarSrc,
  backgroundSrc,
  avatarSize,
  backgroundImageSize,
  avatarBorderColor = '',
  avatarBorderWidth = '5px',
  avatarPosition = 'center',
  sx = {},
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 'inherit',
        ...sx,
      }}
    >
      <UserBackgroundImage size={backgroundImageSize} src={backgroundSrc} />
      <UserAvatar
        name={name}
        src={avatarSrc}
        size={avatarSize}
        sx={{
          position: 'absolute',
          transform: 'translateY(-50%)',
          left:
            avatarPosition === 'center'
              ? `calc(50% - ${avatarSize / 2}px)`
              : '2rem',
          border: avatarBorderColor
            ? `${avatarBorderWidth} solid ${avatarBorderColor}`
            : 'none',
        }}
      />
    </Box>
  );
};

export default UserAvatarWithBackground;
