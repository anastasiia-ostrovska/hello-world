import ProfileInfoList from './ProfileInfoList/ProfileInfoList';

import styles from './ProfileInfoCard.module.css';

const ProfileInfoCard = () => {
  return (
    <section className={styles.card_wrapper}>
      <img
        className={styles.image}
        src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg"
        alt="John Doe"
      />
      <ProfileInfoList />
    </section>
  );
};

export default ProfileInfoCard;
