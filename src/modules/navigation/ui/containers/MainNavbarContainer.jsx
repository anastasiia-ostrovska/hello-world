import { useMediaQueryType } from '@/shared/hooks';
import SideMainNavbar from '@/modules/navigation/ui/containers/SideMainNavbar';
import BottomMainNavbar from '@/modules/navigation/ui/containers/BottomMainNavbar';
import useNavbar from '@/modules/navigation/hooks/useNavbar';
import useNavItemColor from '@/modules/navigation/hooks/useNavItemColor';

const MainNavbarContainer = ({ navItems }) => {
  const { isUpSM } = useMediaQueryType();
  const { getIsActive, handleNavItemClick } = useNavbar();
  const getNavItemColor = useNavItemColor();

  const Navbar = isUpSM ? SideMainNavbar : BottomMainNavbar;

  return (
    <Navbar
      navItems={navItems}
      handleNavItemClick={handleNavItemClick}
      getIsActive={getIsActive}
      getNavItemColor={getNavItemColor}
    />
  );
};

export default MainNavbarContainer;
