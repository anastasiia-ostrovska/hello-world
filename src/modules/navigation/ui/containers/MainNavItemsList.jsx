import SideMainNavItem from '@/modules/navigation/ui/components/SideMainNavItem';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const MainNavItemsList = ({
  navItems,
  activeItem,
  handleNavItemClick,
  getNavItemColor,
  isSide = false,
}) => {
  return (
    <>
      {navItems.map((item) => {
        const { label, icon, path, id: currentId } = item;
        const { id: activeId } = activeItem;
        const color = getNavItemColor(activeId, currentId);

        if (isSide) {
          return (
            <SideMainNavItem
              key={currentId}
              id={currentId}
              label={label}
              icon={icon}
              path={path}
              color={color}
              onClick={handleNavItemClick}
            />
          );
        }

        return (
          <BottomNavigationAction
            key={currentId}
            label={label}
            icon={icon}
            onClick={() => handleNavItemClick({ currentId, path })}
            sx={{ color }}
          />
        );
      })}
    </>
  );
};

export default MainNavItemsList;
