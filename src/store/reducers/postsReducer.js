import { createSlice } from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';

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
  selectors: {
    selectPosts: (state) => state.posts,
  },
  reducers: {
    addNewPost(state, action) {
      const post = { id: 4, text: action.payload, likes: 0 };
      state.posts.push(post);
    },
  },
}).injectInto(rootReducer);

export const { selectPosts } = postsReducer.selectors;
export const { addNewPost } = postsReducer.actions;
