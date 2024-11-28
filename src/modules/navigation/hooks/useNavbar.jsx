import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useActiveIndex from '@/modules/navigation/hooks/useActiveIndex';

const useNavbar = (navItems) => {
  const index = useActiveIndex(navItems);
  const [activeIndex, setActiveIndex] = useState(index);
  const navigate = useNavigate();

  const handleNavItemClick = (newIndex, path) => {
    setActiveIndex(newIndex);
    navigate(path);
  };

  return [activeIndex, handleNavItemClick];
};

export default useNavbar;
