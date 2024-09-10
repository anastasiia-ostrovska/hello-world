import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = ({ posts }) => {
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost />
      <div>
        <ul>
          {posts.map(({ id, text, likes }) => (
            <Post key={id} text={text} likes={likes} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyPosts;
