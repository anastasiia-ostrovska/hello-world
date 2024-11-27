import { useMediaQueryType } from '@/shared/hooks';
import SideMainNavbar from '@/modules/navigation/ui/components/SideMainNavbar';
import BottomMainNavbar from '@/modules/navigation/ui/components/BottomMainNavbar';

const MainNavbar = () => {
  const { isUpSM } = useMediaQueryType();

  if (isUpSM) {
    return <SideMainNavbar />;
  }

  return <BottomMainNavbar />;
};

export default MainNavbar;
