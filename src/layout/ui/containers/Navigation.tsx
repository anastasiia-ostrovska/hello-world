import { SideNavbar, BottomNavbar } from '@/modules/navigation';
import useMediaQueryType from '@/shared/hooks/helpers/useMediaQueryType';

const Navigation = () => {
  const { isUpMD } = useMediaQueryType();

  if (isUpMD) {
    return <SideNavbar />;
  }

  return <BottomNavbar />;
};

export default Navigation;
