import { createStore, applyMiddleware, compose } from 'redux';
import websocket from '@giantmachines/redux-websocket';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import usocket from './usocket';  usocket
import {WEBSOCKET_MESSAGE , WEBSOCKET_CONNECT, WEBSOCKET_CONNECTING} from './actions/constants'

const middleware = [
  thunk,
  
  
]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, withDevTools(
  applyMiddleware(...middleware)
))
