import { useMemo } from 'react';
import { Avatar } from '@mui/material';
import getInitials from '@/modules/users/utils/getInitials';
import getColorFromName from '@/modules/users/utils/getColorFromName';

const UserAvatar = ({ name, src, size, sx = {} }) => {
  const initials = useMemo(() => getInitials(name), [name]);
  const color = useMemo(() => getColorFromName(name), [name]);

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
