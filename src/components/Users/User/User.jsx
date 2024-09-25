import UserPhoto from '@components/common/images/UserPhoto';
import { NavLink } from 'react-router-dom';

import styles from './User.module.css';

const User = ({ id, name, followed, photos, follow, unfollow, disabled }) => {
  console.log('rerendered: ', id);
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

      {followed ? (
        <button type="button" disabled={disabled} onClick={() => unfollow(id)}>
          Unfollow
        </button>
      ) : (
        <button type="button" disabled={disabled} onClick={() => follow(id)}>
          Follow
        </button>
      )}
    </li>
  );
};

export default User;
