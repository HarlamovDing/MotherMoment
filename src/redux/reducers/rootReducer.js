import { combineReducers } from 'redux';
import { modalsReducer } from './Modals/modalsReducer';
import { authReducer } from './Auth/authReducer';

export const rootReducer = combineReducers({
  modals: modalsReducer,
  user: authReducer
});

