import { ChangeEvent, useCallback } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux';
import { setCurrentPage } from '@/modules/users/store/usersSlice';

export type PageChangeHandler = (
  event: ChangeEvent<unknown>,
  page: number
) => void;

const usePageChange = (): PageChangeHandler => {
  const dispatch = useAppDispatch();

  return useCallback(
    (_, page) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );
};

export default usePageChange;
