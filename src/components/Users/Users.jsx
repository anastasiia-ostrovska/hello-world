import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  setCurrentPage,
  setUsersData,
  follow,
  unfollow,
} from '@reducers/usersReducer';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import User from './User/User';

import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const { users, usersCount, currentPage, totalCount, status } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(setUsersData(usersCount, currentPage));
  }, [currentPage, dispatch, usersCount]);

  const pagesCount = Math.ceil(totalCount / usersCount);
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  const handleFollowClick = (userId) => {
    dispatch(follow(userId));
  };

  const handleUnfollowClick = (userId) => {
    dispatch(unfollow(userId));
  };

  return (
    <div>
      {status === 'loading' && <LinearPreloader />}
      <div>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={page === currentPage ? styles.active : ''}
            onClick={() => dispatch(setCurrentPage(page))}
            style={{ fontSize: '2rem' }}
          >
            {page}
          </button>
        ))}
      </div>
      <ul>
        {users.map((user) => {
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
              disabled={user.status === 'loading'}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
