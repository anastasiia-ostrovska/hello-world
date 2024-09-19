// import userPhoto from '@assets/user.svg';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import styles from './User.module.css';

const User = ({ id, name, followed, photos, toggleFollow }) => {
  return (
    <li className={styles.item}>
      {photos.small ? (
        <img src={photos.small} alt={name} />
      ) : (
        <PersonRoundedIcon
          color="success"
          sx={{ height: '100%', width: '100%' }}
        />
      )}

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
