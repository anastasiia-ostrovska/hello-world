import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <img
        className={styles.profile_background_image}
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/sunset-header.jpg?fit=1584%2C396&ssl=1"
        alt="profile background"
      />
      <section>
        <img
          className={styles.profile_image}
          src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg"
          alt="John Doe"
        />
        <div>Info about John</div>
      </section>
      <MyPosts />
    </div>
  );
};

export default Profile;
