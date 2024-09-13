import { combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';
import messagesReducer from './reducers/messagesReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
});

export default rootReducer;
