import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveItem,
  setActiveItem,
} from '@/modules/navigation/store/navigationSlice';
import { useCallback } from 'react';

const useNavbar = (navItems) => {
  const { pathname } = useLocation();
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentItem = navItems.find((item) => pathname.includes(item.path)) || {
    id: '',
    path: '',
  };

  if (currentItem.id !== activeItem.id) {
    const { id, path } = currentItem;
    dispatch(setActiveItem({ id, path }));
  }

  const handleNavItemClick = useCallback(
    (newItem) => {
      navigate(newItem.path);
    },
    [navigate]
  );

  return [activeItem, handleNavItemClick];
};

export default useNavbar;
