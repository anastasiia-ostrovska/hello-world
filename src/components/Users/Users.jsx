import { connect } from 'react-redux';
import User from './User/User';
import { toggleFollow } from '../../redux/reducers/usersReducer';

const Users = ({ users, handleToggleFollow }) => {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.userId}
          user={user}
          handleToggleFollow={handleToggleFollow}
        />
      ))}
    </ul>
  );
};

const mapState = ({ users }) => ({ users: users.users });

const mapDispatch = (dispatch) => ({
  handleToggleFollow: (userId) => dispatch(toggleFollow(userId)),
});

export default connect(mapState, mapDispatch)(Users);
