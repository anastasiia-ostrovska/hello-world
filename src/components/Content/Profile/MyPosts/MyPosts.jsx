import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost />
      <div>
        <ul>
          <Post text="Here my first post" />
          <Post text="Glad to see you here!" />
          <Post text="Whasup guys and gals" />
        </ul>
      </div>
    </section>
  );
};

export default MyPosts;
