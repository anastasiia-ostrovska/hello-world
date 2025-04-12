import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavItem from './BottomNavItem';
import useNavItemColor from '../../model/useNavItemColor';
import { NavbarLayoutProps } from '../../model/types';
import { SIDE_NAV_ITEMS } from '../../config/side-items';

const BottomNavbarLayout = ({ navItems }: NavbarLayoutProps) => {
  return (
    <Paper
      component="nav"
      square
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation sx={{ backgroundColor: 'transparent' }}>
        {navItems}
      </BottomNavigation>
    </Paper>
  );
};

const BottomNavbar = () => {
  const getColor = useNavItemColor();

  return (
    <BottomNavbarLayout
      navItems={SIDE_NAV_ITEMS.map(({ id, path, ...itemProps }) => {
        const itemColor = getColor(path);

        return (
          <BottomNavItem
            key={id}
            path={path}
            color={itemColor}
            {...itemProps}
          />
        );
      })}
    />
  );
};

export default BottomNavbar;
