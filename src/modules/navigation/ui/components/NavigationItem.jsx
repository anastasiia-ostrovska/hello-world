import useNavigationItem from '@/modules/navigation/hooks/ui/useNavigationItem';

const NavigationItem = ({ type, label, icon, path, handleClick }) => {
  const { color, ItemComponent } = useNavigationItem({ path, type });

  return (
    <ItemComponent
      label={label}
      icon={icon}
      path={path}
      color={color}
      onClick={handleClick}
    />
  );
};

export default NavigationItem;
