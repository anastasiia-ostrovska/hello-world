import { useMediaQueryType } from '@/shared/hooks';
import { MAIN_NAVIGATION } from '@/modules/navigation/constants/navigationItems';
import useNavbar from '@/modules/navigation/hooks/useNavbar';
import useNavItemColor from '@/modules/navigation/hooks/useNavItemColor';
import SideMainNavbar from '@/modules/navigation/ui/containers/SideMainNavbar';
import BottomMainNavbar from '@/modules/navigation/ui/containers/BottomMainNavbar';

const MainNavbarContainer = () => {
  const [activeItem, handleNavItemClick] = useNavbar(MAIN_NAVIGATION);
  const getNavItemColor = useNavItemColor();
  const { isUpSM } = useMediaQueryType();

  const Navbar = isUpSM ? SideMainNavbar : BottomMainNavbar;

  return (
    <Navbar
      navItems={MAIN_NAVIGATION}
      activeItem={activeItem}
      handleNavItemClick={handleNavItemClick}
      getNavItemColor={getNavItemColor}
    />
  );
};

export default MainNavbarContainer;
