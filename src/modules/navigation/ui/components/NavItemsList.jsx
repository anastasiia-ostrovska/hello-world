import NavItem from '@/modules/navigation/ui/components/NavItem';

const NavItemsList = ({ navItems, type, onClick }) => {
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
            handleClick={onClick}
          />
        );
      })}
    </>
  );
};

export default NavItemsList;
