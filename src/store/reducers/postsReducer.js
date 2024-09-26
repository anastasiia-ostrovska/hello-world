import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    // temporarily mocked data
    { id: 1, text: 'Here my first post', likes: 5 },
    { id: 2, text: 'Glad to see you here!', likes: 3 },
    { id: 3, text: 'Whasup guys and gals', likes: 8 },
  ],
};

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost(state, action) {
      const post = { id: 4, text: action.payload, likes: 0 };
      state.posts.push(post);
    },
  },
});

export const selectPosts = (state) => state.posts.posts;

export const { addNewPost } = postsReducer.actions;

export default postsReducer;
