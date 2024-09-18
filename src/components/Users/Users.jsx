import { Component } from 'react';
import { connect } from 'react-redux';

import getUsers from '@/api/queries/get/getUsers';
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setTotalUsersCount,
} from '../../redux/reducers/usersReducer';

import User from './User/User';

import styles from './Users.module.css';

class Users extends Component {
  componentDidMount() {
    const { usersCount, currentPage } = this.props;
    const params = `?count=${usersCount}&page=${currentPage}`;
    getUsers(params).then((response) => {
      const { setUsers, setTotalUsersCount } = this.props;
      setUsers(response.data.items);
      setTotalUsersCount(response.data.totalCount);
    });
  }

  handlePageChange = (currentPage) => {
    const { usersCount, setCurrentPage } = this.props;
    const params = `?count=${usersCount}&page=${currentPage}`;
    setCurrentPage(currentPage);
    getUsers(params).then((response) => {
      const { setUsers } = this.props;
      setUsers(response.data.items);
    });
  };

  render() {
    const { users, usersCount, currentPage, totalCount, toggleFollow } =
      this.props;

    const pagesCount = Math.ceil(totalCount / usersCount);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
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
                toggleFollow={toggleFollow}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = ({
  users: { users, usersCount, currentPage, totalCount },
}) => ({
  users,
  usersCount,
  currentPage,
  totalCount,
});

export default connect(mapState, {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setTotalUsersCount,
})(Users);
