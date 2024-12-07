import useMainNavbarType from '@/modules/navigation/hooks/useMainNavbarType';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const MainNavbar = ({ navItems }) => {
  const { type, NavbarContainer } = useMainNavbarType();
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
