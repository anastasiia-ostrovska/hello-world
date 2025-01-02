import NAVIGATION_TYPE from '@/modules/navigation/constants/navigation-types';
import TopNavItem from '@/modules/navigation/ui/components/TopNavItem';
import SideNavItem from '@/modules/navigation/ui/components/SideNavItem';
import BottomNavItem from '@/modules/navigation/ui/components/BottomNavItem';
import ProfileNavItem from '@/modules/navigation/ui/components/ProfileNavItem';

const NAVIGATION_ITEMS = {
  [NAVIGATION_TYPE.TOP]: TopNavItem,
  [NAVIGATION_TYPE.SIDE]: SideNavItem,
  [NAVIGATION_TYPE.BOTTOM]: BottomNavItem,
  [NAVIGATION_TYPE.PROFILE]: ProfileNavItem,
};

export default NAVIGATION_ITEMS;
