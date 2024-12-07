import useMainNavigation from '@/modules/navigation/hooks/useMainNavigation';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const MainNavbar = ({ navItems }) => {
  const { type, NavbarContainer } = useMainNavigation();
  const handleNavItemClick = useNavigationHandler();

  return (
    <NavbarContainer>
      <NavItemsList
        navItems={navItems}
        type={type}
        onClick={handleNavItemClick}
      />
    </NavbarContainer>
  );
};

export default MainNavbar;
