import SideMainNavItem from '@/modules/navigation/ui/components/SideMainNavItem';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TopNavItem from '@/modules/navigation/ui/components/TopNavItem';

const NavItemsList = ({
  navItems,
  handleNavItemClick,
  getIsActive,
  getNavItemColor,
  type = 'bottom',
  ariaLabel = '',
  count = null,
}) => {
  return (
    <>
      {navItems.map((item) => {
        const { label, icon, path, id } = item;

        const isActive = getIsActive(path);
        const color = getNavItemColor(isActive);

        if (type === 'side') {
          return (
            <SideMainNavItem
              key={id}
              label={label}
              aria-label={label}
              icon={icon}
              path={path}
              color={color}
              onClick={handleNavItemClick}
            />
          );
        }

        if (type === 'top') {
          return (
            <TopNavItem
              key={id}
              path={path}
              ariaLabel={ariaLabel}
              count={count}
              icon={icon}
              color={color}
              onClick={handleNavItemClick}
            />
          );
        }

        return (
          <BottomNavigationAction
            key={id}
            aria-label={label}
            icon={icon}
            onClick={() => handleNavItemClick(path)}
            sx={{ color }}
          />
        );
      })}
    </>
  );
};

export default NavItemsList;
