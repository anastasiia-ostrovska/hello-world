import UserPhoto from '@components/common/images/UserPhoto';

import { NavLink } from 'react-router-dom';
import {
  postFollowState,
  deleteFollowState,
} from '@/services/api/api-requests';
import styles from './User.module.css';

const User = ({
  id,
  name,
  followed,
  photos,
  follow,
  unfollow,
  disabled,
  toggleFollowingInProgressUsers,
}) => {
  const onFollowClick = async (id) => {
    toggleFollowingInProgressUsers(true, id);
    const data = await postFollowState(id);

    if (data.resultCode === 0) {
      follow(id);
    }
    toggleFollowingInProgressUsers(false, id);
  };

  const onUnfollowClick = async (id) => {
    toggleFollowingInProgressUsers(true, id);
    const data = await deleteFollowState(id);

    if (data.resultCode === 0) {
      unfollow(id);
    }
    toggleFollowingInProgressUsers(false, id);
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
        <button
          type="button"
          disabled={disabled}
          onClick={() => onUnfollowClick(id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          type="button"
          disabled={disabled}
          onClick={() => onFollowClick(id)}
        >
          Follow
        </button>
      )}
    </li>
  );
};

export default User;
