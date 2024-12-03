import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const TopNavItem = ({ path, ariaLabel, count, icon, color, onClick }) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      color={color}
      onClick={() => onClick(path)}
    >
      <Badge badgeContent={count} color="error">
        {icon}
      </Badge>
    </IconButton>
  );
};

export default TopNavItem;
