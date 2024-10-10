import { useMemo } from 'react';
import { Avatar } from '@mui/material';
import getInitials from '@/modules/users/utils/getInitials';
import getColorFromName from '@/modules/users/utils/getColorFromName';

const UserAvatar = ({ name, src = '' }) => {
  const initials = useMemo(() => getInitials(name), [name]);
  const color = useMemo(() => getColorFromName(name), [name]);

  return (
    <Avatar
      alt={name}
      src={src}
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: src ? 'transparent' : color,
      }}
    >
      {initials}
    </Avatar>
  );
};

export default UserAvatar;
