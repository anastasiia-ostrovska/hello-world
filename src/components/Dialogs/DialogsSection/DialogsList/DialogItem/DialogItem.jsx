import styles from './DialogItem.module.css';

const DialogItem = ({ name }) => {
  return <li className={styles.dialog}>{name}</li>;
};

export default DialogItem;
