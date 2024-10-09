import { useMemo } from 'react';
import { Avatar } from '@mui/material';
import getInitials from '@/modules/users/utils/getInitials';

const UserAvatar = ({ name, src }) => {
  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <Avatar alt={name} src={src} sx={{ width: '100%', height: '100%' }}>
      {initials}
    </Avatar>
  );
};

export default UserAvatar;
