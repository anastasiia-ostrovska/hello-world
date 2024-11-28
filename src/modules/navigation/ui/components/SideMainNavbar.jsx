import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideMainNavbar = ({
  navItems,
  activeIndex,
  handleNavItemClick,
  getNavItemColor,
}) => {
  return (
    <Paper elevation={3} sx={{ position: 'fixed', borderRadius: 3 }}>
      <List>
        {navItems.map((item, index) => {
          const { label, icon, path } = item;
          const isActive = activeIndex === index;

          return (
            <ListItem
              key={label}
              disablePadding
              onClick={() => handleNavItemClick(index, path)}
              sx={{
                color: getNavItemColor(isActive),
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: getNavItemColor(isActive),
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default SideMainNavbar;
