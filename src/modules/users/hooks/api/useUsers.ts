import { ResponseDataState } from '@/shared/types/response-data';
import { UsersResponse } from '@/modules/users/types';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import useUsersQueryParams from '@/modules/users/hooks/state/useUsersQueryParams';

export type UsersResponseState = ResponseDataState<UsersResponse>;

const useUsers = (): UsersResponseState => {
  const { usersQueryCount, currentPage } = useUsersQueryParams();
  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  return { data, isLoading };
};

export default useUsers;
