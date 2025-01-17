import { Styles } from '@/shared/types/mui-props';
import Box from '@mui/material/Box';
import UserAvatar, {
  UserAvatarProps,
} from '@/modules/users/ui/components/UserAvatar';
import UserBackgroundImage, {
  UserBackgroundImageProps,
} from '@/modules/users/ui/components/UserBackgroundImage';

export interface UserAvatarWithBackgroundProps {
  userName: UserAvatarProps['userName'];
  avatarSrc: UserAvatarProps['src'];
  backgroundSrc: UserBackgroundImageProps['src'];
  avatarSize: UserAvatarProps['size'];
  backgroundImageSize: UserBackgroundImageProps['size'];
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
