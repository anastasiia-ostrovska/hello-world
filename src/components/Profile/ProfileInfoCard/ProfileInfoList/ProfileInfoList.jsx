import InfoItem from './InfoItem/InfoItem';

import styles from './ProfileInfoList.module.css';

const ProfileInfoList = () => {
  return (
    <div className={styles.info_wrapper}>
      <h1>John Doe</h1>
      <ul>
        <InfoItem data="Architect" />
        <InfoItem data="US, Louisiana" />
      </ul>
    </div>
  );
};

export default ProfileInfoList;
