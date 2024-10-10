import { useMemo } from 'react';
import Box from '@mui/material/Box';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';
import getAvatarAndBackgroundSizes from '@/modules/users/utils/getAvatarAndBackgroundSizes';

const UserAvatarWithBackground = ({
  name,
  userSrc = '',
  backgroundSrc = '',
  size = 'medium',
  position = 'center',
  avatarBorderColor = '',
}) => {
  const sizes = useMemo(() => getAvatarAndBackgroundSizes(size), [size]);

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 'inherit',
      }}
    >
      <UserBackgroundImage size={sizes.background} src={backgroundSrc} />
      <UserAvatar
        name={name}
        src={userSrc}
        size={sizes.avatar}
        sx={{
          position: 'absolute',
          transform: 'translateY(-50%)',
          left:
            position === 'center'
              ? `calc(50% - ${sizes.avatar / 2}px)`
              : '2rem',
          border: avatarBorderColor ? `5px solid ${avatarBorderColor}` : '',
        }}
      />
    </Box>
  );
};

export default UserAvatarWithBackground;
