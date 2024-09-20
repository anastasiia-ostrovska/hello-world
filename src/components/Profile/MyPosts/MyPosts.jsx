import { connect } from 'react-redux';
import {
  addNewPost,
  updateNewPostText,
} from '../../../redux/reducers/profileReducer';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = ({
  posts,
  newPostText,
  updateNewPostText: updateText,
  addNewPost: addPost,
}) => {
  const handleTextChange = (event) => {
    const newText = event.target.value;
    updateText(newText);
  };
  return (
    <section className={styles.myPosts_wrapper}>
      <h2> My posts</h2>
      <NewPost
        value={newPostText}
        onChange={handleTextChange}
        onCLick={addPost}
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

export default connect(mapState, { updateNewPostText, addNewPost })(MyPosts);
