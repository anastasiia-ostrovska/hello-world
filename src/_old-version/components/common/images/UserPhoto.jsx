import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import styles from './UserPhoto.module.css';

const UserPhoto = ({ url, name }) => {
  if (!url) {
    return (
      <div className={styles.image_wrapper}>
        <PersonRoundedIcon sx={{ height: '100%', width: '100%' }} />
      </div>
    );
  }
  return (
    <div className={styles.image_wrapper}>
      <img src={url} alt={name} />
    </div>
  );
};

export default UserPhoto;
