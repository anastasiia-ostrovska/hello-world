const User = ({ user, handleToggleFollow }) => {
  const { id, name, followed, photos } = user;
  return (
    <li>
      <img
        src={
          photos.small
            ? photos.small
            : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
        }
        alt={name}
      />
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
