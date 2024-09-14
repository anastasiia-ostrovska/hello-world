const UPDATE_NEW_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';

const initialState = {
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
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newPostText };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 4, text: state.newPostText, likes: 0 }],
        newPostText: '',
      };
    default:
      return state;
  }
};

export const updateNewPostText = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText,
});
export const addPost = () => ({ type: ADD_POST });

export default profileReducer;
