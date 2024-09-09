import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <div>
        <textarea
          name="newPost"
          id="newPost"
          rows="10"
          placeholder="Your news..."
        />
        <button type="submit">Post</button>
      </div>
      <div>
        <ul>
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
    </section>
  );
};

export default MyPosts;
