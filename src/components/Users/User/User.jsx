import userPhoto from '../../../assets/user.svg';

const User = ({ id, name, followed, photos, toggleFollow }) => {
  return (
    <li>
      <img src={photos.small ? photos.small : userPhoto} alt={name} />
      <h3>{name}</h3>
      <ul>
        <li>position</li>
        <li>city</li>
      </ul>
      <button type="button" onClick={() => toggleFollow(id)}>
        {followed ? 'Follow' : 'Unfollow'}
      </button>
    </li>
  );
};

export default User;
