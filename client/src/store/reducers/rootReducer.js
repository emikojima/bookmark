import { combineReducers } from 'redux';
import reducer from './reducer';
import alertsReducer from './alertsReducer';

const rootReducer = combineReducers({
  user: reducer,
  alerts: alertsReducer,
});

export default rootReducer;
