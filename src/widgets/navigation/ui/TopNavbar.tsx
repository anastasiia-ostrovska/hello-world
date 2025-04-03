import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import { ModeSwitcher } from '@features/mode-switcher';
import { NavbarLayoutProps } from '../model/types';
import { TOP_NAV_ITEMS } from '../config/top-items';
import useNavItemColor from '../model/useNavItemColor';
import ProfileNavbar from './ProfileNavbar';
import TopNavItem from './TopNavItem';

interface TopNavbarLayoutProps extends NavbarLayoutProps {
  profileNavbar: ReactElement;
  modeSwitcher: ReactElement;
}

const TopNavbarLayout = ({
  navItems,
  profileNavbar,
  modeSwitcher,
}: TopNavbarLayoutProps) => {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={{ sm: 1 }}
      sx={{ ml: 'auto', mr: '-8px' }}
    >
      {modeSwitcher}
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
      modeSwitcher={<ModeSwitcher />}
    />
  );
};

export default TopNavbar;
