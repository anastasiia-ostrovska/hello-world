import UserPhoto from '@components/common/images/UserPhoto';
import ProfileInfoList from './ProfileInfoList/ProfileInfoList';

import styles from './ProfileInfoCard.module.css';

const ProfileInfoCard = ({ profile }) => {
  const url = profile.photos.large;
  return (
    <section className={styles.card_wrapper}>
      <UserPhoto url={url} name={profile.fullName} />
      <ProfileInfoList
        name={profile.fullName}
        profession={profile.aboutMe}
        description={profile.lookingForAJobDescription}
      />
    </section>
  );
};

export default ProfileInfoCard;
