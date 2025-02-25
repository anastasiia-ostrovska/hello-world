import { useMediaQueryState } from '@shared/mui';
import LogoFull from '@assets/logo-full.svg';
import { BottomNavbar, SideNavbar, TopNavbar } from '../../navigation';
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
