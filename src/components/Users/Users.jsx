import { connect } from 'react-redux';
import { Component } from 'react';
import axios from 'axios';
import User from './User/User';
import { setUsers, toggleFollow } from '../../redux/reducers/usersReducer';

const axiosInstance = axios.create({
  headers: {
    'API-KEY': '41a53ef2-5be7-469a-90cd-a4a1a000adf7',
  },
});

class Users extends Component {
  componentDidMount() {
    axiosInstance.get('/api/users').then((response) => {
      this.props.setUsers(response.data.items);
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
  setUsers: (users) => dispatch(setUsers(users)),
});

export default connect(mapState, mapDispatch)(Users);
