import UserPhoto from '@components/common/images/UserPhoto';

import { NavLink } from 'react-router-dom';
import {
  postFollowState,
  deleteFollowState,
} from '@/services/api/api-requests';
import styles from './User.module.css';

const User = ({ id, name, followed, photos, follow, unfollow }) => {
  const onFollowClick = (id) => {
    postFollowState(id).then((data) => {
      if (data.resultCode === 0) {
        follow(id);
      }
    });
  };

  const onUnfollowClick = (id) => {
    deleteFollowState(id).then((data) => {
      if (data.resultCode === 0) {
        unfollow(id);
      }
    });
  };

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
        <button type="button" onClick={() => onUnfollowClick(id)}>
          Unfollow
        </button>
      ) : (
        <button type="button" onClick={() => onFollowClick(id)}>
          Follow
        </button>
      )}
    </li>
  );
};

export default User;
