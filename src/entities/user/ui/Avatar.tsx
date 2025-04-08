import { Styles } from '@shared/mui';
import MUIAvatar from '@mui/material/Avatar';
import { useAvatar } from '../model/useAvatar';
import { Photo, User } from '../model/types';

export interface UserAvatarProps {
  name: User['name'];
  avatarSrc: Photo;
  avatarSize: number;
  sx?: Styles;
}

const Avatar = ({ name, avatarSrc, avatarSize, sx = {} }: UserAvatarProps) => {
  const { bgColor, initials } = useAvatar(name);

  return (
    <MUIAvatar
      alt={name || 'Avatar is loading...'}
      aria-label={name || 'Avatar'}
      src={avatarSrc || ''}
      sx={{
        width: avatarSize,
        height: avatarSize,
        fontSize: avatarSize * 0.5,
        backgroundColor: name ? bgColor : 'default',
        ...sx,
      }}
    >
      {!!name && initials}
    </MUIAvatar>
  );
};

export default Avatar;
