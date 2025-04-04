import { useGetAuthDataQuery } from '@features/login';
import { useAppSelector } from '@shared/redux';
import { selectToken } from '@shared/api';

interface UseInitializeAppResult {
  isAuth: boolean;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectToken);
  // const token = getStoredToken();
  // const isAuth = useAppSelector(selectIsAuth);
  // const dispatch = useAppDispatch();
  const { isSuccess, isLoading: isAuthLoading } = useGetAuthDataQuery(
    undefined,
    {
      skip: !token,
    }
  );

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setIsAuth(true));
  //   }
  // }, [dispatch, isSuccess]);

  return { isAuth: isSuccess, isInitialized: !isAuthLoading };
};

export default useInitializeApp;
