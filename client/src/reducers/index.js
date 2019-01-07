import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

// Reducer pops out payload

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});
