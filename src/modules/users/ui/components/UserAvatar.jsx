import { useMemo } from 'react';
import { Avatar } from '@mui/material';
import getInitials from '@/modules/users/utils/getInitials';
import useAvatarColor from '@/modules/users/hooks/useAvatarColor';

const UserAvatar = ({ name, src, size, sx = {} }) => {
  const color = useAvatarColor(name);
  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <Avatar
      alt={name}
      src={src}
      sx={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        backgroundColor: src ? 'transparent' : color,
        ...sx,
      }}
    >
      {initials}
    </Avatar>
  );
};

export default UserAvatar;
