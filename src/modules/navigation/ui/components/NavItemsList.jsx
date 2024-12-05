import useNavbar from '@/modules/navigation/hooks/useNavbar';
import NavItem from '@/modules/navigation/ui/components/NavItem';

const NavItemsList = ({ navItems, type }) => {
  const handleNavItemClick = useNavbar();

  return (
    <>
      {navItems.map((item) => {
        const { id, label, icon, path } = item;

        return (
          <NavItem
            key={id}
            type={type}
            label={label}
            icon={icon}
            path={path}
            handleClick={handleNavItemClick}
          />
        );
      })}
    </>
  );
};

export default NavItemsList;
