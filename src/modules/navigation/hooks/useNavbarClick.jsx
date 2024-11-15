import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useNavbarClick = (initialIndex) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleNavigationChange = (event, newIndex) => {
    setActiveIndex(newIndex);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return [activeIndex, handleNavigationChange, handleNavigation];
};

export default useNavbarClick;
