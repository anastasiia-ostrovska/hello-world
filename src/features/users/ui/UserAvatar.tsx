import { Styles } from '@/shared/mui';
import Avatar from '@mui/material/Avatar';
import useAvatar from '../model/useAvatar';
import { Photo, User } from '../model/types';

export interface UserAvatarProps {
  userName: User['name'];
  src: Photo;
  size: number;
  sx?: Styles;
}

const UserAvatar = ({ userName, src, size, sx = {} }: UserAvatarProps) => {
  const { bgColor, initials } = useAvatar(userName);

  return (
    <Avatar
      alt={userName || 'Avatar is loading...'}
      src={src || ''}
      sx={{
        width: size,
        height: size,
        fontSize: size * 0.5,
        backgroundColor: userName ? bgColor : 'default',
        ...sx,
      }}
    >
      {userName && initials}
    </Avatar>
  );
};

export default UserAvatar;
