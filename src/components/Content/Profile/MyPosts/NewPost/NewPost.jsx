import styles from './NewPost.module.css';

const NewPost = () => {
  return (
    <div className={styles.post_wrapper}>
      <textarea
        name="newPost"
        id="newPost"
        rows="10"
        placeholder="Your news..."
      />
      <button type="submit">Post</button>
    </div>
  );
};

export default NewPost;
