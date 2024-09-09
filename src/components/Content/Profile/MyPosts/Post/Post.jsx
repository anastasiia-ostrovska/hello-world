import styles from './Post.module.css';

const Post = ({ text }) => {
  return (
    <li className={styles.post_wrapper}>
      <div className={styles.post}>
        <img
          src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg"
          alt="John Doe"
        />
        <p>{text}</p>
      </div>
      <button type="button">🤍</button>
    </li>
  );
};

export default Post;
