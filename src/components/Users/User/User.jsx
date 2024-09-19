import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import UserPhoto from '@components/common/images/userPhoto';

import { NavLink } from 'react-router-dom';
import styles from './User.module.css';

const User = ({ id, name, followed, photos, toggleFollow }) => {
  return (
    <li className={styles.item}>
      <NavLink to={`/profile/${id}`}>
        <UserPhoto url={photos.small} name={name} />
      </NavLink>

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
