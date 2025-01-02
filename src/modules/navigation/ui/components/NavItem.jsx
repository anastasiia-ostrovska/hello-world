import NAVIGATION_ITEMS from '@/modules/navigation/config/navigation-components';
import useNavItemColor from '@/modules/navigation/hooks/useNavItemColor';
import useNavItemActive from '@/modules/navigation/hooks/useNavItemActive';

const NavItem = ({ type, label, icon, path, handleClick }) => {
  const isActive = useNavItemActive(path);
  const color = useNavItemColor(isActive);

  const Item = NAVIGATION_ITEMS[type];

  return (
    <Item
      label={label}
      icon={icon}
      path={path}
      color={color}
      onClick={handleClick}
    />
  );
};

export default NavItem;
