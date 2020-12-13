import { combineReducers } from 'redux';
import authReducer from './authReducer';
import calendarReducer from './calendarReducer';

export default combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
});
