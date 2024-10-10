import profileBackgroundSrc from '@assets/default-profile-background.webp';
import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = ({ profile }) => {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.image_container}>
        <img
          className={styles.profile_background_image}
          src={profileBackgroundSrc}
          alt="profile background"
        />
      </div>
      <ProfileInfoCard profile={profile} />
      <MyPosts />
    </div>
  );
};

export default Profile;
