const UPDATE_NEW_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';

const initialState = {
  posts: [
    { id: 1, text: 'Here my first post', likes: 5 },
    { id: 2, text: 'Glad to see you here!', likes: 3 },
    { id: 3, text: 'Whasup guys and gals', likes: 8 },
  ],
  text: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return { ...state, text: action.newText };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 4, text: state.text, likes: 0 }],
        text: '',
      };
    default:
      return state;
  }
};

export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});
export const addPost = () => ({ type: ADD_POST });

export default profileReducer;
