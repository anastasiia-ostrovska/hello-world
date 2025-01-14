import { NavigationListProps } from '@/modules/navigation/types';

const NavigationList = ({
  items,
  NavigationItem,
  onClick,
}: NavigationListProps) => {
  return (
    <>
      {items.map(({ id, ...itemProps }) => {
        return (
          <NavigationItem
            key={id}
            color="red"
            {...itemProps}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default NavigationList;
