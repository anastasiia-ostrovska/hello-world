import NAVIGATION_ITEMS from '@/modules/navigation/config/navigation-components';
import useIsActivePath from '@/modules/navigation/hooks/helpers/useIsActivePath';
import useNavItemColor from '@/modules/navigation/hooks/helpers/useNavItemColor';

const useNavigationItem = ({ path, type }) => {
  const isActive = useIsActivePath(path);
  const color = useNavItemColor(isActive);
  const ItemComponent = NAVIGATION_ITEMS[type];

  return { color, ItemComponent };
};

export default useNavigationItem;
