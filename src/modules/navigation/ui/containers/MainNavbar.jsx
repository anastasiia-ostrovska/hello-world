import useMainNavbarType from '@/modules/navigation/hooks/useMainNavbarType';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';
import NavItemsList from '@/modules/navigation/ui/components/NavItemsList';

const MainNavbar = ({ navItems }) => {
  const { type, NavbarContainer } = useMainNavbarType();
  const handleNavigate = useNavigationHandler();

  return (
    <NavbarContainer>
      <NavItemsList navItems={navItems} type={type} onClick={handleNavigate} />
    </NavbarContainer>
  );
};

export default MainNavbar;
