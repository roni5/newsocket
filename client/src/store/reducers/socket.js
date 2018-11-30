import {WEBSOCKET_MESSAGE } from '../actions/constants'
import reducers from '.';

/**
 * An reducer to handle WebSocket messages.
 * NB: There is no error handling!
 */
const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEBSOCKET_MESSAGE ':
      // Assuming that your data is a DOMString in JSON format
      const data = JSON.parse(action.payload.data);
      return { ...state, ...data}
    default:
      return state
  }
}
export default socketReducer