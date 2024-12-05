import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

const SideNavContainer = ({ children }) => {
  return (
    <Paper
      component="nav"
      elevation={3}
      sx={{ position: 'fixed', borderRadius: 3 }}
    >
      <List>{children}</List>
    </Paper>
  );
};

export default SideNavContainer;
