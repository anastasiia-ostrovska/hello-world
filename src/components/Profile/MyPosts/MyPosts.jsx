import { connect } from 'react-redux';
import {
  addPost,
  updateNewPostText,
} from '../../../redux/reducers/profileReducer';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = ({
  posts,
  newPostText,
  handleTextChange,
  handleAddNewPost,
}) => {
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost
        value={newPostText}
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

const mapState = ({ profile }) => {
  return {
    posts: profile.posts,
    newPostText: profile.newPostText,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleTextChange: (event) => {
      const newPostText = event.target.value;
      dispatch(updateNewPostText(newPostText));
    },
    handleAddNewPost: () => {
      dispatch(addPost());
    },
  };
};

export default connect(mapState, mapDispatch)(MyPosts);
