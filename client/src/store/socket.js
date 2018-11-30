// import websocket from '@giantmachines/redux-websocket'
import {WEBSOCKET_MESSAGE , WEBSOCKET_CONNECT} from './actions/constants'

/**
 * An middleware to handle WebSocket connections.
 * NB: There is no exception handling!
 */

let websocket;


const socket = store => next => action => {
  switch (action.type) {
    // User request to connect
    case 'WEBSOCKET_CONNECT':
      // Configure the object
      websocket = new WebSocket(action.payload.url);

      // Attach the callbacks
      // websocket.onopen = () => dispatch({ type: 'WEBSOCKET:OPEN' });
      // websocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      // websocket.onmessage = (event) => dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });

      break;

    // User request to send a message
    case 'WEBSOCKET:SEND':
      websocket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case 'WEBSOCKET:DISCONNECT':
      websocket.close();
      break;

    default: // We don't really need the default but ...
      break;
  };

  return next(action);
};

export default socket