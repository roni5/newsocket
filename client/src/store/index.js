import { createStore, applyMiddleware, compose } from 'redux';
import websocket from '@giantmachines/redux-websocket';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [
  thunk,
  websocket
]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, withDevTools(
  applyMiddleware(...middleware)
))
