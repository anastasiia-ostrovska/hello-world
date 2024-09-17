import { Component } from 'react';
import { connect } from 'react-redux';

import { setUsers, toggleFollow } from '../../redux/reducers/usersReducer';
import users from '../../services/endpoints';
import axiosInstance from '../../services/axiosInstance';

import User from './User/User';

class Users extends Component {
  componentDidMount() {
    axiosInstance.get(users).then((response) => {
      const { setUsers } = this.props;
      setUsers(response.data.items);
    });
  }

  render() {
    const { users, toggleFollow } = this.props;

    return (
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
    );
  }
}

const mapState = ({ users }) => ({ users: users.users });

export default connect(mapState, { setUsers, toggleFollow })(Users);
