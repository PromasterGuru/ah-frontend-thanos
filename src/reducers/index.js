import { combineReducers } from 'redux';
import userReducer from './userReducer';
import articleReducer from './articleReducer';

const combinedReducers = combineReducers({
  userReducer,
  articleReducer,
});

export default combinedReducers;
