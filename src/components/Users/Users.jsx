import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useGetUsersQuery,
  useUnfollowUserMutation,
  useFollowUserMutation,
} from '@/modules/users/store/usersApi';
import {
  setCurrentPage,
  selectUsersCountOnPage,
  selectCurrentPage,
} from '@/modules/users/store/usersReducer';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import UserCardsList from '@/modules/users/ui/containers/UserCardsList';

import { useCallback } from 'react';
import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersCount = useSelector(selectUsersCountOnPage);
  const currentPage = useSelector(selectCurrentPage);

  const { data: users, isLoading } = useGetUsersQuery({
    usersCount,
    currentPage,
  });

  const [
    unfollowUser,
    // { isLoading: isLoadingUnfollow, originalArgs: unfollowUserId },
  ] = useUnfollowUserMutation();

  const [
    followUser,
    // { isLoading: isLoadingFollow, originalArgs: followUserId },
  ] = useFollowUserMutation();

  const handleUserCardClick = useCallback(
    (userId) => {
      navigate(`/profile/${userId}`);
    },
    [navigate]
  );

  const handleFollowClick = useCallback(
    (userId) => {
      followUser(userId);
    },
    [followUser]
  );

  const handleUnfollowClick = useCallback(
    (userId) => {
      unfollowUser(userId);
    },
    [unfollowUser]
  );

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
        <UserCardsList
          users={users.items}
          onUserCardClick={handleUserCardClick}
          onFollowClick={handleFollowClick}
          onUnfollowClick={handleUnfollowClick}
        />
      </div>
    );
  }

  return <LinearPreloader />;
};

export default Users;
