import { useDispatch, useSelector } from 'react-redux';
import {
  useGetUsersQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
} from '@reducers/usersApi';
import {
  setCurrentPage,
  selectUsersCountOnPage,
  selectCurrentPage,
} from '@reducers/usersReducer';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import User from './User/User';

import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const usersCount = useSelector(selectUsersCountOnPage);
  const currentPage = useSelector(selectCurrentPage);

  const { data: users, isLoading } = useGetUsersQuery({
    usersCount,
    currentPage,
  });

  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();

  const handleFollowClick = (userId) => {
    followUser(userId);
  };

  const handleUnfollowClick = (userId) => {
    unfollowUser(userId);
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  if (!isLoading) {
    const { totalCount } = users;
    const pagesCount = Math.ceil((totalCount - 26600) / usersCount);
    const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

    return (
      <div>
        <div>
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={page === currentPage ? styles.active : ''}
              onClick={() => handlePageChange(page)}
              style={{ fontSize: '2rem' }}
              disabled={isLoading}
            >
              {page}
            </button>
          ))}
        </div>
        <ul>
          {users.items.map((user) => {
            const { id, name, followed, photos } = user;
            return (
              <User
                key={id}
                id={id}
                name={name}
                followed={followed}
                photos={photos}
                follow={handleFollowClick}
                unfollow={handleUnfollowClick}
                disabled={isLoadingUnfollow || isLoadingFollow}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return <LinearPreloader />;
};

export default Users;
