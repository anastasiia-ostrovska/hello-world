import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <img
        className={styles.profile_background_image}
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?ssl=1"
        alt="profile background"
      />
      <ProfileInfoCard />
      <MyPosts />
    </div>
  );
};

export default Profile;
