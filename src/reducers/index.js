import { combineReducers } from 'redux';
import userReducer from './userReducer';
import article from './articleReducer';
import loginReducer from './loginReducer/loginReducer';
import profileReducer from './profileReducer';

const reducer = combineReducers({
  loginReducer,
  userReducer,
  article,
  profileReducer,

});

export default reducer;
