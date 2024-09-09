import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <img
        className={styles.profile_background_image}
        src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg"
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
