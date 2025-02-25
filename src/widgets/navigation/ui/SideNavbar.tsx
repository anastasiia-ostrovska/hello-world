import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import SideNavItem from './SideNavItem';
import useNavItemColor from '../model/useNavItemColor';
import { NavbarLayoutProps } from '../model/types';
import { SIDE_NAV_ITEMS } from '../config/side-items';

const SideNavbarLayout = ({ navItems }: NavbarLayoutProps) => {
  return (
    <Paper component="nav" sx={{ position: 'fixed', width: '180px' }}>
      <List>{navItems}</List>
    </Paper>
  );
};

const SideNavbar = () => {
  const getColor = useNavItemColor();

  return (
    <SideNavbarLayout
      navItems={SIDE_NAV_ITEMS.map(({ id, path, ...itemProps }) => {
        const itemColor = getColor(path);

        return (
          <SideNavItem key={id} path={path} color={itemColor} {...itemProps} />
        );
      })}
    />
  );
};

export default SideNavbar;
