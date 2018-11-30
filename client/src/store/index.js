import { createStore, applyMiddleware, compose } from 'redux';
import websocket from '@giantmachines/redux-websocket';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import socket from './socket';

const middleware = [
  thunk,
  socket
]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, withDevTools(
  applyMiddleware(...middleware)
))
