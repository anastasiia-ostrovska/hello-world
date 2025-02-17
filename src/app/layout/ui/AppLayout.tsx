import { useMediaQueryState } from '@/shared/mui';
import { BottomNavbar, SideNavbar, TopNavbar } from '@/widgets/navigation';
import LogoFull from '@assets/logo-full.svg';
import Layout from './Layout';

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
