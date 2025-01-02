import NavigationItem from '@/modules/navigation/ui/components/NavigationItem';

const NavigationList = ({ items, type, onClick }) => {
  return (
    <>
      {items.map(({ id, ...itemProps }) => (
        <NavigationItem
          key={id}
          {...itemProps}
          type={type}
          handleClick={onClick}
        />
      ))}
    </>
  );
};

export default NavigationList;
