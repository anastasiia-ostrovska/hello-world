import userPhoto from '../../../assets/user.svg';

const User = ({ user, handleToggleFollow }) => {
  const { id, name, followed, photos } = user;
  return (
    <li>
      <img src={photos.small ? photos.small : userPhoto} alt={name} />
      <h3>{name}</h3>
      <ul>
        <li>position</li>
        <li>city</li>
      </ul>
      <button type="button" onClick={() => handleToggleFollow(id)}>
        {followed ? 'Follow' : 'Unfollow'}
      </button>
    </li>
  );
};

export default User;
