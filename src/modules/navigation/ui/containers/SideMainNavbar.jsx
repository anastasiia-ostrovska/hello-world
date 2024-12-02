import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import MainNavItemsList from '@/modules/navigation/ui/containers/MainNavItemsList';

const SideMainNavbar = ({
  navItems,
  activeItem,
  handleNavItemClick,
  getNavItemColor,
}) => {
  return (
    <Paper elevation={3} sx={{ position: 'fixed', borderRadius: 3 }}>
      <List>
        <MainNavItemsList
          navItems={navItems}
          activeItem={activeItem}
          handleNavItemClick={handleNavItemClick}
          getNavItemColor={getNavItemColor}
          isSide
        />
      </List>
    </Paper>
  );
};

export default SideMainNavbar;
