import useAvatar from '@/modules/users/hooks/ui/useAvatar';
import Avatar from '@mui/material/Avatar';

const UserAvatar = ({ name, src, size, sx = {} }) => {
  const { bgColor, initials } = useAvatar(name);

  return (
    <Avatar
      alt={name || 'Avatar is loading...'}
      src={src || ''}
      sx={{
        width: size,
        height: size,
        fontSize: size * 0.5,
        backgroundColor: name ? bgColor : 'default',
        ...sx,
      }}
    >
      {name && initials}
    </Avatar>
  );
};

export default UserAvatar;
