import { combineReducers } from 'redux';
import user from './userReducer';
import article from './articleReducer';
import loginReducer from './loginReducer/loginReducer';
import comments from './commentReducers';

const reducer = combineReducers({
  loginReducer,
  user,
  article,
  comments,
});

export default reducer;
