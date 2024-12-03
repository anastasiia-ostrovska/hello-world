import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const SideMainNavbar = ({
  navItems,
  handleNavItemClick,
  getIsActive,
  getNavItemColor,
}) => {
  return (
    <Paper
      component="nav"
      elevation={3}
      sx={{ position: 'fixed', borderRadius: 3 }}
    >
      <List>
        <NavItemsList
          navItems={navItems}
          handleNavItemClick={handleNavItemClick}
          getIsActive={getIsActive}
          getNavItemColor={getNavItemColor}
          type="side"
        />
      </List>
    </Paper>
  );
};

export default SideMainNavbar;
