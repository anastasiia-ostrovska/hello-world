const User = ({ user, handleFollow, handleUnfollow }) => {
  const { userId, name, position, city, isFollowed, imageSrc } = user;
  return (
    <li>
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <ul>
        <li>{position}</li>
        <li>{city}</li>
      </ul>
      {isFollowed ? (
        <button type="button" onClick={() => handleUnfollow(userId)}>
          Unfollow
        </button>
      ) : (
        <button type="button" onClick={() => handleFollow(userId)}>
          Follow
        </button>
      )}
    </li>
  );
};

export default User;
