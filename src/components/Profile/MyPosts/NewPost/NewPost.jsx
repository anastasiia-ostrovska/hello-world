import styles from './NewPost.module.css';

const NewPost = ({ value, onChange, placeholder = '', onCLick }) => {
  return (
    <div className={styles.post_wrapper}>
      <textarea
        name="newPost"
        id="newPost"
        rows="5"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event)}
      />
      <button type="submit" onClick={() => onCLick()}>
        Post
      </button>
    </div>
  );
};

export default NewPost;
