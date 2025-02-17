import { ReactElement } from 'react';
import { LogOutButton } from '@/modules/auth';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ProfileMenuButton from './ProfileMenuButton';
import ProfileNavItem from './ProfileNavItem';
import useProfileNavbar from '../model/useProfileNavbar';
import useNavItemColor from '../model/useNavItemColor';
import { PROFILE_NAV_ITEMS } from '../config/profile-items';

type MenuProps = Omit<
  ReturnType<typeof useProfileNavbar>,
  'handleMenuButtonClick'
>;

interface ProfileNavbarLayoutProps {
  menuID: string;
  menuLabeledBy: string;
  menuProps: MenuProps;
  profileButton: ReactElement;
  profileNavItems: ReactElement[];
  logoutButton: ReactElement;
}

const ProfileNavbarLayout = ({
  menuID,
  menuLabeledBy,
  profileButton,
  profileNavItems,
  logoutButton,
  menuProps,
}: ProfileNavbarLayoutProps) => {
  const { anchorEl, isMenuOpen, handleMenuClose } = menuProps;
  return (
    <>
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
        {profileNavItems}
        <Divider />
        {logoutButton}
      </Menu>
    </>
  );
};

const ProfileNavbar = ({ iconSize }: { iconSize: number }) => {
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
          id={profileButtonID}
          controlsID={menuID}
          size={iconSize}
          isMenuOpen={isMenuOpen}
          onClick={handleMenuButtonClick}
        />
      }
      profileNavItems={PROFILE_NAV_ITEMS.map(({ id, path, ...itemProps }) => {
        const itemColor = getColor(path);

        return (
          <ProfileNavItem
            key={id}
            path={path}
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
