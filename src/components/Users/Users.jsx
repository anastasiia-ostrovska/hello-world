import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import {
  setCurrentPage,
  selectUsersCountOnPage,
  selectCurrentPage,
} from '@/modules/users/store/usersReducer';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import UserCardsList from '@/modules/users/ui/containers/UserCardsList';

import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const usersCount = useSelector(selectUsersCountOnPage);
  const currentPage = useSelector(selectCurrentPage);

  const { data: users, isLoading } = useGetUsersQuery({
    usersCount,
    currentPage,
  });

  console.log(users);

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
        <UserCardsList users={users.items} isLoading={isLoading} />
      </div>
    );
  }

  return <LinearPreloader />;
};

export default Users;
