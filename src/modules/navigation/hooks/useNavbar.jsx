import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useActiveIndex from '@/modules/navigation/hooks/useActiveIndex';

const useNavbar = (navigationItems) => {
  const index = useActiveIndex(navigationItems);
  const [activeIndex, setActiveIndex] = useState(index);

  const handleNavigationChange = (event, newIndex) => {
    setActiveIndex(newIndex);
  };

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return [activeIndex, handleNavigationChange, navigateTo];
};

export default useNavbar;
