import { NavigationItemProps } from '@/modules/navigation/types';
import { memo } from 'react';
import IconButton from '@mui/material/IconButton';

const TopNavItem = ({
  label,
  icon,
  path,
  color,
  onClick,
}: NavigationItemProps) => {
  return (
    <IconButton aria-label={label} onClick={() => onClick(path)} sx={{ color }}>
      {icon}
    </IconButton>
  );
};

export default memo(TopNavItem);
