import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '@api/api-requests';

const initialState = {
  profile: null,
  posts: [
    // temporarily mocked data
    { id: 1, text: 'Here my first post', likes: 5 },
    { id: 2, text: 'Glad to see you here!', likes: 3 },
    { id: 3, text: 'Whasup guys and gals', likes: 8 },
  ],
  status: 'idle',
};

const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addNewPost(state, action) {
      const post = { id: 4, text: action.payload, likes: 0 };
      state.posts.push(post);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setUserProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const selectProfile = (state) => state.profile.profile;
export const selectStatus = (state) => state.profile.status;
export const selectPosts = (state) => state.profile.posts;

export const { addNewPost, setStatus, setUserProfile } = profileReducer.actions;

export const setUserProfileData = (userId) => async (dispatch) => {
  dispatch(setStatus('loading'));

  try {
    const data = await getUserProfile(userId);

    dispatch(setStatus('idle'));
    dispatch(setUserProfile(data));
  } catch (error) {
    dispatch(setStatus('error'));
  }
};

export default profileReducer.reducer;
