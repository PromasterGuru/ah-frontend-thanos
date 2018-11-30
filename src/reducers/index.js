import { combineReducers } from 'redux';
import userReducer from './userReducer';
import article from './articleReducer';
import loginReducer from './loginReducer/loginReducer';
import socialLoginReducer from './socialLoginReducer';

const reducer = combineReducers({
  loginReducer,
  userReducer,
  socialLoginReducer,
  article,
});

export default reducer;
