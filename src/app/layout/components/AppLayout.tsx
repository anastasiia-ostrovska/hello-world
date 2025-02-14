import { BottomNavbar, SideNavbar, TopNavbar } from '@/modules/navigation';
import useMediaQueryType from '@/shared/hooks/helpers/useMediaQueryType';
import LogoFull from '@assets/logo-full.svg';
import Layout from './ui/Layout';

const AppLayout = () => {
  const { isUpMD } = useMediaQueryType();
  const Navigation = isUpMD ? SideNavbar : BottomNavbar;

  return (
    <Layout
      logo={<LogoFull />}
      topNavigation={<TopNavbar />}
      sideNavigation={<Navigation />}
    />
  );
};

export default AppLayout;
