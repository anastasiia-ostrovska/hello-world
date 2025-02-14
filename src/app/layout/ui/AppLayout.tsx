import { useMediaQueryType } from '@/shared/mui';
import { BottomNavbar, SideNavbar, TopNavbar } from '@/modules/navigation';
import LogoFull from '@assets/logo-full.svg';
import Layout from '@/app/layout/ui/Layout';

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
