import { ReactElement } from 'react';
import { LogoutButton } from '@features/login';
import { ROUTES } from '@shared/consts';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { useAuthMeQuery } from '@entities/session';
import ProfileMenuButton from './ProfileMenuButton';
import ProfileNavItem from './ProfileNavItem';
import useProfileNavbar from '../model/useProfileNavbar';
import useNavItemColor from '../model/useNavItemColor';
import { NavbarLayoutProps } from '../model/types';
import { PROFILE_NAV_ITEMS } from '../config/profile-items';

type MenuProps = Omit<
  ReturnType<typeof useProfileNavbar>,
  'handleMenuButtonClick'
>;

interface ProfileNavbarLayoutProps extends NavbarLayoutProps {
  menuID: string;
  menuLabeledBy: string;
  menuProps: MenuProps;
  profileButton: ReactElement;
  logoutButton: ReactElement;
}

const ProfileNavbarLayout = ({
  menuID,
  menuLabeledBy,
  profileButton,
  navItems,
  logoutButton,
  menuProps,
}: ProfileNavbarLayoutProps) => {
  const { anchorEl, isMenuOpen, handleMenuClose } = menuProps;
  return (
    <Box component="li">
      {profileButton}
      <Menu
        id={menuID}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClick={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': menuLabeledBy,
        }}
        elevation={5}
        sx={{ mt: 2 }}
        disableScrollLock
      >
        {navItems}
        <Divider />
        {logoutButton}
      </Menu>
    </Box>
  );
};

const ProfileNavbar = ({ iconSize }: { iconSize: number }) => {
  const { data: authData } = useAuthMeQuery();
  const { anchorEl, isMenuOpen, handleMenuButtonClick, handleMenuClose } =
    useProfileNavbar();
  const getColor = useNavItemColor();

  const menuID = 'profile-menu';
  const profileButtonID = 'profile-menu-button';

  return (
    <ProfileNavbarLayout
      menuID={menuID}
      menuLabeledBy={profileButtonID}
      menuProps={{ anchorEl, isMenuOpen, handleMenuClose }}
      profileButton={
        <ProfileMenuButton
          userId={authData?.data?.userId}
          buttonID={profileButtonID}
          controlsID={menuID}
          size={iconSize}
          isMenuOpen={isMenuOpen}
          onClick={handleMenuButtonClick}
        />
      }
      navItems={PROFILE_NAV_ITEMS.map(({ id, path, ...itemProps }) => {
        const itemColor = getColor(path);
        const itemPath =
          path === ROUTES.PROFILE && authData
            ? `${ROUTES.PROFILE}/${authData.data?.userId}`
            : path;

        return (
          <ProfileNavItem
            key={id}
            path={itemPath}
            color={itemColor}
            {...itemProps}
          />
        );
      })}
      logoutButton={<LogOutButton iconSize={iconSize} />}
    />
  );
};

export default ProfileNavbar;
