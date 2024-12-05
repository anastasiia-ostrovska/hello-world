import useMainNavigation from '@/modules/navigation/hooks/useMainNavigation';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const MainNavbar = ({ navItems }) => {
  const { type, NavbarContainer } = useMainNavigation();

  return (
    <NavbarContainer>
      <NavItemsList navItems={navItems} type={type} />
    </NavbarContainer>
  );
};

export default MainNavbar;
