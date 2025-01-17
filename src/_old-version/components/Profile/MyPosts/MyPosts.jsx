import { useDispatch, useSelector } from 'react-redux';
import { addNewPost, selectPosts } from '@/_old-version/reducers/postsReducer';
import useInputValue from '@/shared/hooks/state/useInputValue';

import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const { postText, handleTextChange, resetText } = useInputValue('');

  const handleAddNewPost = () => {
    dispatch(addNewPost(postText));
    resetText();
  };

  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost
        value={postText}
        onChange={handleTextChange}
        onCLick={handleAddNewPost}
        placeholder="Your news..."
      />
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
