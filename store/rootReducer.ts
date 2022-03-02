import { combineReducers } from '@reduxjs/toolkit';
import user from './users';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
