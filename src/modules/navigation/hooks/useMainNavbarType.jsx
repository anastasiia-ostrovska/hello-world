import { useMediaQueryType } from '@/shared/hooks';
import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import NAVIGATION_CONTAINERS from '@/modules/navigation/constants/navItemContainers';

const useMainNavbarType = () => {
  const { isUpSM } = useMediaQueryType();
  const type = isUpSM ? NAVIGATION_TYPES.SIDE : NAVIGATION_TYPES.BOTTOM;
  const NavbarContainer = NAVIGATION_CONTAINERS[type];

  return { type, NavbarContainer };
};

export default useMainNavbarType;
