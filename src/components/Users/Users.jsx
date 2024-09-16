import { Component } from 'react';
import { connect } from 'react-redux';

import { users } from '../../services/endpoints';
import { setUsers, toggleFollow } from '../../redux/reducers/usersReducer';
import axiosInstance from '../../services/axiosInstance';

import User from './User/User';

class Users extends Component {
  componentDidMount() {
    axiosInstance.get(users).then((response) => {
      const { handleSetUsers } = this.props;
      handleSetUsers(response.data.items);
    });
  }

  render() {
    const { users, handleToggleFollow } = this.props;
    return (
      <ul>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            handleToggleFollow={handleToggleFollow}
          />
        ))}
      </ul>
    );
  }
}

const mapState = ({ users }) => ({ users: users.users });

const mapDispatch = (dispatch) => ({
  handleToggleFollow: (userId) => dispatch(toggleFollow(userId)),
  handleSetUsers: (users) => dispatch(setUsers(users)),
});

export default connect(mapState, mapDispatch)(Users);
