import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
  selectActiveItem,
  setActiveItem,
} from '@/modules/navigation/store/navigationSlice';

const useNavbar = (navItems) => {
  const { pathname } = useLocation();
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const currentItem = navItems.find((item) =>
      pathname.includes(item.path)
    ) || {
      id: '',
      path: '',
    };

    if (currentItem.id !== activeItem.id) {
      const { id, path } = currentItem;
      dispatch(setActiveItem({ id, path }));
    }
  }, [activeItem.id, dispatch, navItems, pathname]);

  const handleNavItemClick = useCallback(
    (newItem) => {
      navigate(newItem.path);
    },
    [navigate]
  );

  return [activeItem, handleNavItemClick];
};

export default useNavbar;
