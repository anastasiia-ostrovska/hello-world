import { useTheme } from '@mui/material/styles';
import { MAIN_NAVIGATION } from '@/modules/navigation/constants/navigation';
import useNavbar from '@/modules/navigation/hooks/useNavbar';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideMainNavbar = () => {
  const [activeIndex, handleNavigationChange, navigateTo] =
    useNavbar(MAIN_NAVIGATION);
  const theme = useTheme();

  const handleNavItemClick = (event, newIndex, path) => {
    handleNavigationChange(event, newIndex);
    navigateTo(path);
  };

  return (
    <Paper elevation={3} sx={{ position: 'fixed', borderRadius: 3 }}>
      <List>
        {MAIN_NAVIGATION.map((item, index) => {
          const { label, icon, path } = item;
          const isActive = activeIndex === index;

          return (
            <ListItem
              key={label}
              disablePadding
              onClick={(event) => handleNavItemClick(event, index, path)}
              sx={{
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.primary.light,
                opacity: 0.7,
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.primary.light,
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
