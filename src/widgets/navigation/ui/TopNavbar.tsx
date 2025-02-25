import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import useNavItemColor from '../model/useNavItemColor';
import ProfileNavbar from './ProfileNavbar';
import TopNavItem from './TopNavItem';
import { NavbarLayoutProps } from '../model/types';
import { TOP_NAV_ITEMS } from '../config/top-items';

interface TopNavbarLayoutProps extends NavbarLayoutProps {
  profileNavbar: ReactElement;
}

const TopNavbarLayout = ({ navItems, profileNavbar }: TopNavbarLayoutProps) => {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={{ sm: 1 }}
      sx={{ ml: 'auto', mr: '-8px' }}
    >
      {navItems}
      {profileNavbar}
    </Stack>
  );
};

const TopNavbar = () => {
  const getColor = useNavItemColor();

  return (
    <TopNavbarLayout
      navItems={TOP_NAV_ITEMS.map(({ id, path, ...itemProps }) => {
        const itemColor = getColor(path);

        return (
          <TopNavItem key={id} path={path} color={itemColor} {...itemProps} />
        );
      })}
      profileNavbar={<ProfileNavbar iconSize={24} />}
    />
  );
};

export default TopNavbar;
