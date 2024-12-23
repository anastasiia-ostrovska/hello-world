import { useMemo } from 'react';
import { Avatar } from '@mui/material';
import getInitials from '@/modules/users/utils/getInitials';
import useAvatarColor from '@/modules/users/hooks/useAvatarColor';

const UserAvatar = ({ name, src, size, sx = {} }) => {
  const color = useAvatarColor(name);
  const initials = useMemo(() => getInitials(name), [name]);

  if (name) {
    return (
      <Avatar
        alt={name}
        src={src}
        sx={{
          width: size,
          height: size,
          fontSize: size * 0.5,
          backgroundColor: color,
          ...sx,
        }}
      >
        {initials}
      </Avatar>
    );
  }

  return (
    <Avatar
      alt="Avatar is loading..."
      src=""
      sx={{
        width: size,
        height: size,
        ...sx,
      }}
    />
  );
};

export default UserAvatar;
