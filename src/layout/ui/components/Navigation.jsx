import { useMediaQueryType } from '@/shared/hooks';
import { SideNavbar, BottomNavbar } from '@/modules/navigation';

const Navigation = () => {
  const { isUpMD } = useMediaQueryType();

  if (isUpMD) {
    return <SideNavbar />;
  }

  return <BottomNavbar />;
};

export default Navigation;
