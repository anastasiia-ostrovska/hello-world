import { connect } from 'react-redux';
import {
  addPost,
  updateNewPostText,
} from '../../../redux/reducers/postsReducer';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = ({ postsList, newPostText, handleTextChange, addNewPost }) => {
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost
        value={newPostText}
        onChange={handleTextChange}
        onCLick={addNewPost}
        placeholder="Your news..."
      />
      <div>
        <ul>
          {postsList.map(({ id, text, likes }) => (
            <Post key={id} text={text} likes={likes} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const mapState = ({ posts }) => {
  return {
    postsList: posts.postsList,
    newPostText: posts.newPostText,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleTextChange: (event) => {
      const newPostText = event.target.value;
      dispatch(updateNewPostText(newPostText));
    },
    addNewPost: () => {
      dispatch(addPost());
    },
  };
};

export default connect(mapState, mapDispatch)(MyPosts);
