import {WEBSOCKET_CONNECTING } from '../actions/constants'
import reducers from '.';

/**
 * An reducer to handle WebSocket messages.
 * NB: There is no error handling!
 */
const openSocket = (state = {}, action) => {
  switch (action.type) {
      case 'WEBSOCKET_CONNECTING':
    //   websocket = new WebSocket(action.payload.url);
    //   // Assuming that your data is a DOMString in JSON format
    //   const data = JSON.parse(action.payload.data);
    //   return { ...state, ...data }
      break;
    default:
      return state
  }
}
export default openSocket