import { combineReducers } from 'redux';
import postReducers from './postsReducer';
import userReducer from './userReducer';

// export default combineReducers({
//     replaceMe: ()=> "hi there"
// });

export default combineReducers({
    posts: postReducers,
    user: userReducer
});