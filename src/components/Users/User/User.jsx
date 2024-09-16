const User = ({ user, handleToggleFollow }) => {
  const { userId, name, position, city, isFollowed, imageSrc } = user;
  return (
    <li>
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <ul>
        <li>{position}</li>
        <li>{city}</li>
      </ul>
      <button type="button" onClick={() => handleToggleFollow(userId)}>
        {isFollowed ? 'Follow' : 'Unfollow'}
      </button>
    </li>
  );
};

export default User;
