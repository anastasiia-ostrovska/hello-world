import profileBackgroundSrc from '@assets/default-profile-background.webp';
import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={styles.profile_wrapper}>
      <img
        className={styles.profile_background_image}
        src={profileBackgroundSrc}
        alt="profile background"
      />
      <ProfileInfoCard profile={props.profile} />
      <MyPosts />
    </div>
  );
};

export default Profile;
