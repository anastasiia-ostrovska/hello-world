import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = ({ posts }) => {
  return (
    <div className={styles.profile_wrapper}>
      <img
        className={styles.profile_background_image}
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/sunset-header.jpg?fit=1584%2C396&ssl=1"
        alt="profile background"
      />
      <ProfileInfoCard />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
