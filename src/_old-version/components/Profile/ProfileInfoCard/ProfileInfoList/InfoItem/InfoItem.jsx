import styles from './InfoItem.module.css';

const InfoItem = ({ data }) => {
  return <li className={styles.item}>{data}</li>;
};

export default InfoItem;
