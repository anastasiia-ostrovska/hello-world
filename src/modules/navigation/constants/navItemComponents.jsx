import NAVIGATION_TYPES from '@/modules/navigation/constants/navTypes';
import TopNavItem from '@/modules/navigation/ui/components/TopNavItem';
import SideNavItem from '@/modules/navigation/ui/components/SideNavItem';
import BottomNavItem from '@/modules/navigation/ui/components/BottomNavItem';

const NAVIGATION_ITEMS = {
  [NAVIGATION_TYPES.TOP]: TopNavItem,
  [NAVIGATION_TYPES.SIDE]: SideNavItem,
  [NAVIGATION_TYPES.BOTTOM]: BottomNavItem,
};

export default NAVIGATION_ITEMS;
