import { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '@/services/api/api-requests';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';

import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setIsLoading,
  toggleFollowingInProgressUsers,
} from '../../redux/reducers/usersReducer';

import User from './User/User';

import styles from './Users.module.css';

class Users extends Component {
  componentDidMount() {
    const {
      usersCount,
      currentPage,
      setUsers,
      setTotalUsersCount,
      setIsLoading,
    } = this.props;
    const params = `?count=${usersCount}&page=${currentPage}`;

    setIsLoading(true);

    getUsers(params).then((data) => {
      setIsLoading(false);
      setUsers(data.items);
      // temporarily decreased amount:
      setTotalUsersCount(data.totalCount - 26600);
    });
  }

  handlePageChange = async (currentPage) => {
    const { usersCount, setCurrentPage, setUsers, setIsLoading } = this.props;
    const params = `?count=${usersCount}&page=${currentPage}`;

    setIsLoading(true);
    setCurrentPage(currentPage);

    const data = await getUsers(params);

    setIsLoading(false);
    setUsers(data.items);
  };

  render() {
    const {
      users,
      usersCount,
      currentPage,
      totalCount,
      isLoading,
      follow,
      unfollow,
      followingInProgressUsers,
      toggleFollowingInProgressUsers,
    } = this.props;

    const pagesCount = Math.ceil(totalCount / usersCount);
    const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

    return (
      <div>
        {isLoading && <LinearPreloader />}
        <div>
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={page === currentPage ? styles.active : ''}
              onClick={() => this.handlePageChange(page)}
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
                follow={follow}
                unfollow={unfollow}
                disabled={followingInProgressUsers.some(
                  (userId) => userId === id
                )}
                toggleFollowingInProgressUsers={toggleFollowingInProgressUsers}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = ({
  users: {
    users,
    usersCount,
    currentPage,
    totalCount,
    isLoading,
    followingInProgressUsers,
  },
}) => ({
  users,
  usersCount,
  currentPage,
  totalCount,
  isLoading,
  followingInProgressUsers,
});

export default connect(mapState, {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setIsLoading,
  toggleFollowingInProgressUsers,
})(Users);
