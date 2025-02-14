import { useMediaQueryState } from '@/shared/mui';
import { SideNavbar, TopNavbar } from '@/modules/navigation';
import { BottomNavbar } from '@/widgets/navigation';
import LogoFull from '@assets/logo-full.svg';
import Layout from '@/app/layout/ui/Layout';

const AppLayout = () => {
  const { isUpMD } = useMediaQueryState();
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
