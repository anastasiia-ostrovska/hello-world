import ProfileInfoCard from './ProfileInfoCard/ProfileInfoCard';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const posts = [
  { id: 1, text: 'Here my first post', likes: 5 },
  { id: 2, text: 'Glad to see you here!', likes: 3 },
  { id: 3, text: 'Whasup guys and gals', likes: 8 },
];

const Profile = () => {
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
