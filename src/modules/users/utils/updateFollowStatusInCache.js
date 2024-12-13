const findQueryByName = (queries, endpointName) =>
  Object.values(queries).find((query) => query.endpointName === endpointName);

const updateFollowStatusInCache = async ({
  userId,
  isFollowed,
  dispatch,
  getState,
  queryFulfilled,
  usersApi,
  endpointName = 'getUsers',
}) => {
  const state = getState();
  const getUsersQuery = findQueryByName(state.api.queries, endpointName);

  if (!getUsersQuery?.originalArgs) return;

  const { usersQueryCount, currentPage } = getUsersQuery.originalArgs;

  const patchResult = dispatch(
    usersApi.util.updateQueryData(
      endpointName,
      { usersQueryCount, currentPage },
      (draft) => {
        const user = draft.items.find((user) => user.id === userId);
        if (user) {
          user.followed = isFollowed;
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
