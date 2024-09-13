import { connect } from 'react-redux';
import {
  addPost,
  updateNewPostText,
} from '../../../redux/reducers/profileReducer';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = (props) => {
  const { posts, value, handleTextChange, addNewPost } = props;
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost
        value={value}
        onChange={handleTextChange}
        onCLick={addNewPost}
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

const mapState = (state) => {
  return {
    posts: state.profile.posts,
    value: state.profile.text,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleTextChange: (event) => {
      const newText = event.target.value;
      dispatch(updateNewPostText(newText));
    },
    addNewPost: () => {
      dispatch(addPost());
    },
  };
};

export default connect(mapState, mapDispatch)(MyPosts);
