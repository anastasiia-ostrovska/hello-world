import { Photo, UserName } from '@/modules/users/types';
import { Styles } from '@/shared/types/mui-props';
import useAvatar from '@/modules/users/hooks/ui/useAvatar';
import Avatar from '@mui/material/Avatar';

export interface UserAvatarProps {
  userName: UserName;
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
