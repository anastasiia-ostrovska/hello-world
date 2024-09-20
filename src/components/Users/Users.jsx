import { Component } from 'react';
import { connect } from 'react-redux';
import { setUsersData, follow, unfollow } from '@/redux/reducers/usersReducer';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import User from './User/User';

import styles from './Users.module.css';

class Users extends Component {
  componentDidMount() {
    const { usersCount, currentPage, setUsersData } = this.props;

    setUsersData(usersCount, currentPage);
  }

  handlePageChange = async (currentPage) => {
    const { usersCount, setUsersData } = this.props;

    setUsersData(usersCount, currentPage);
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

export default connect(mapState, { setUsersData, follow, unfollow })(Users);
