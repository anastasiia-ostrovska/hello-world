import { UserId, UsersApi, UsersQueryParams } from '@/modules/users/types';
import { AppDispatch, RootState } from '@/redux/types';
import {
  QueryActionCreatorResult,
  QuerySubState,
} from '@reduxjs/toolkit/query';

type QueriesState = Record<string, QuerySubState<unknown> | undefined>;

const findQueryByName = (
  queries: QueriesState,
  endpointName: keyof UsersApi['endpoints']
): QuerySubState<unknown> | undefined => {
  return Object.values(queries).find(
    (query) => query?.endpointName === endpointName
  );
};

interface UpdateFollowStatusInCacheParams {
  userId: UserId;
  isFollowed: boolean;
  dispatch: AppDispatch;
  getState: () => RootState;
  queryFulfilled: QueryActionCreatorResult<any>;
  usersApi: UsersApi;
  endpointName?: keyof UsersApi['endpoints'];
}

const updateFollowStatusInCache = async ({
  userId,
  isFollowed,
  dispatch,
  getState,
  queryFulfilled,
  usersApi,
  endpointName = 'getUsers',
}: UpdateFollowStatusInCacheParams): Promise<void> => {
  if (endpointName !== 'getUsers') return;

  const state = getState();
  const getUsersQuery = findQueryByName(state.api.queries, endpointName);

  if (!getUsersQuery?.originalArgs) return;

  const { usersQueryCount, currentPage } =
    getUsersQuery.originalArgs as UsersQueryParams;

  const patchResult = dispatch(
    usersApi.util.updateQueryData<'getUsers'>(
      endpointName,
      { usersQueryCount, currentPage },
      (draft) => {
        const user = draft.items.find((user) => user.id === userId);
        if (user) {
          user.followed = !isFollowed;
        }
      }
    )
  );

  try {
    await queryFulfilled;
  } catch (error) {
    patchResult.undo();
  }
};

export default updateFollowStatusInCache;
