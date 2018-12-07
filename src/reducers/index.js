import { combineReducers } from 'redux';
import user from './userReducer';
import loginReducer from './loginReducer/loginReducer';
import ratingReducer from './ratingReducer/ratingReducer';

const reducer = combineReducers({
  loginReducer,
  user,
  ratingReducer,
});

export default reducer;
