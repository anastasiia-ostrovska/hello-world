import { SIDE_NAVIGATION } from '@/modules/navigation/constants/navigation';
import useNavbarClick from '@/modules/navigation/hooks/useNavbarClick';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideNavbar = () => {
  const [activeIndex, handleNavigationChange, handleNavigation] =
    useNavbarClick(0);

  return (
    <Paper
      elevation={3}
      sx={{ position: 'fixed', top: 0, left: 0, borderRadius: 3 }}
    >
      <List>
        {SIDE_NAVIGATION.map((item) => {
          const { label, icon, path } = item;

          return (
            <ListItem key={label} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default SideNavbar;
