import { connect } from 'react-redux';
import User from './User/User';
import { follow, unfollow } from '../../redux/reducers/usersReducer';

const Users = ({ users, handleFollow, handleUnfollow }) => {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.userId}
          user={user}
          handleFollow={handleFollow}
          handleUnfollow={handleUnfollow}
        />
      ))}
    </ul>
  );
};

const mapState = ({ users }) => ({ users: users.users });

const mapDispatch = (dispatch) => ({
  handleFollow: (userId) => dispatch(follow(userId)),
  handleUnfollow: (userId) => dispatch(unfollow(userId)),
});

export default connect(mapState, mapDispatch)(Users);
