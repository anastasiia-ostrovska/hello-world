import userPhoto from '@assets/user.svg';

import styles from './User.module.css';

const User = ({ id, name, followed, photos, toggleFollow }) => {
  return (
    <li className={styles.item}>
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
