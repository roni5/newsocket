import {combineReducers} from 'redux';
import customerReducer from './customer';
import socketReducer from './socket';

export default combineReducers({
  customers: customerReducer,
  socket: socketReducer
})
