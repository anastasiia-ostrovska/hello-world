import InfoItem from './InfoItem/InfoItem';

import styles from './ProfileInfoList.module.css';

const ProfileInfoList = ({ name, profession, description }) => {
  return (
    <div className={styles.info_wrapper}>
      <h1>{name}</h1>
      <ul>
        <InfoItem data={profession} />
        <InfoItem data={description} />
      </ul>
    </div>
  );
};

export default ProfileInfoList;
