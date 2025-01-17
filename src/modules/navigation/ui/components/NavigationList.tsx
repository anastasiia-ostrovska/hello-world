import { NavigationListProps } from '@/modules/navigation/types';
import useNavItemColor from '@/modules/navigation/hooks/helpers/useNavItemColor';

const NavigationList = ({
  items,
  NavigationItem,
  onClick,
}: NavigationListProps) => {
  const getNavItemColor = useNavItemColor();

  return (
    <>
      {items.map(({ id, path, ...itemProps }) => {
        const color = getNavItemColor(path);

        return (
          <NavigationItem
            key={id}
            path={path}
            color={color}
            {...itemProps}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default NavigationList;
