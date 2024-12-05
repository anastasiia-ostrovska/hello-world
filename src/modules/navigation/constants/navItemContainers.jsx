import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import SideNavContainer from '@/modules/navigation/ui/containers/SideNavContainer';
import BottomNavContainer from '@/modules/navigation/ui/containers/BottomNavContainer';

const NAVIGATION_CONTAINERS = {
  [NAVIGATION_TYPES.SIDE]: SideNavContainer,
  [NAVIGATION_TYPES.BOTTOM]: BottomNavContainer,
};

export default NAVIGATION_CONTAINERS;
