import { useMediaQueryType } from '@/shared/hooks';
import { MAIN_NAVIGATION } from '@/modules/navigation/constants/navigation';
import useNavbar from '@/modules/navigation/hooks/useNavbar';
import useNavItemColor from '@/modules/navigation/hooks/useNavItemColor';
import SideMainNavbar from '@/modules/navigation/ui/components/SideMainNavbar';
import BottomMainNavbar from '@/modules/navigation/ui/components/BottomMainNavbar';

const MainNavbar = () => {
  const [activeIndex, handleNavItemClick] = useNavbar(MAIN_NAVIGATION);
  const getNavItemColor = useNavItemColor();

  const { isUpSM } = useMediaQueryType();

  if (isUpSM) {
    return (
      <SideMainNavbar
        navItems={MAIN_NAVIGATION}
        activeIndex={activeIndex}
        handleNavItemClick={handleNavItemClick}
        getNavItemColor={getNavItemColor}
      />
    );
  }

  return (
    <BottomMainNavbar
      navItems={MAIN_NAVIGATION}
      activeIndex={activeIndex}
      handleNavItemClick={handleNavItemClick}
      getNavItemColor={getNavItemColor}
    />
  );
};

export default MainNavbar;
