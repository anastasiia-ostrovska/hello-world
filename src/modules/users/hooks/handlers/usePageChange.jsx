import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setCurrentPage } from '@/modules/users/store/usersSlice';

const usePageChange = () => {
  const dispatch = useDispatch();

  const handlePageChange = useCallback(
    (event, page) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  return handlePageChange;
};

export default usePageChange;
