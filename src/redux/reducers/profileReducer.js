const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_NEW_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';

const initialState = {
  profile: null,
  posts: [
    { id: 1, text: 'Here my first post', likes: 5 },
    { id: 2, text: 'Glad to see you here!', likes: 3 },
    { id: 3, text: 'Whasup guys and gals', likes: 8 },
  ],
  newPostText: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newPostText };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [{ id: 4, text: state.newPostText, likes: 0 }, ...state.posts],
        newPostText: '',
      };
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const updateNewPostText = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText,
});
export const addNewPost = () => ({ type: ADD_NEW_POST });

export default profileReducer;
