import { Photo, UserName } from '@/modules/users/types';
import { Styles } from '@/shared/types/mui-props';
import Box from '@mui/material/Box';
import UserAvatar from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage from '@/modules/users/ui/components/UserBackgroundImage';

export interface UserAvatarWithBackgroundProps {
  userName: UserName;
  avatarSrc: Photo;
  backgroundSrc: Photo;
  avatarSize: number;
  backgroundImageSize: number;
  avatarBorderColor?: string;
  avatarBorderWidth?: `${number}px`;
  avatarPosition?: 'center' | 'left';
  sx?: Styles;
}

const UserAvatarWithBackground = ({
  userName,
  avatarSrc,
  backgroundSrc,
  avatarSize,
  backgroundImageSize,
  avatarBorderColor = '',
  avatarBorderWidth = '5px',
  avatarPosition = 'center',
  sx = {},
}: UserAvatarWithBackgroundProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'inherit',
        borderRadius: 'inherit',
        ...sx,
      }}
    >
      <UserBackgroundImage size={backgroundImageSize} src={backgroundSrc} />
      <UserAvatar
        userName={userName}
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
