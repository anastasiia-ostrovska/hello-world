import { useGetAuthDataQuery } from '@/modules/auth';

const useMyId = () => {
  const { data: authData, isLoading: isAuthDataLoading } =
    useGetAuthDataQuery();
  const userId = authData?.data?.id;

  return { userId, isAuthDataLoading };
};

export default useMyId;
