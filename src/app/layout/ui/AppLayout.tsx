import LogoFull from '@assets/logo-full.svg';
import { useMediaQueryState } from '@shared/lib';
import { ModeSwitcher } from '@features/mode-switcher';
import { BottomNavbar, SideNavbar, TopNavbar } from '@widgets/navigation';
import Layout from './Layout';

const AppLayout = () => {
  const { isUpMD } = useMediaQueryState();
  const Navigation = isUpMD ? SideNavbar : BottomNavbar;

  return (
    <Layout
      logo={<LogoFull />}
      topNavigation={<TopNavbar />}
      sideNavigation={<Navigation />}
      modeSwitcher={<ModeSwitcher />}
    />
  );
};

export default AppLayout;
