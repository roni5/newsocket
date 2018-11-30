//import websocket from '@giantmachines/redux-websocket'
import {WEBSOCKET_MESSAGE , WEBSOCKET_CONNECT, WEBSOCKET_CONNECTING} from './actions/constants'

/**
 * An middleware to handle WebSocket connections.
 * NB: There is no exception handling!
 */

 let websocket;


const usocket = store => next => action => {
  switch (action.type) {
    // User request to connect
    case 'WEBSOCKET_CONNECTING':
      // Configure the object
      // websocket = new WebSocket(action.payload.url);

      // Attach the callbacks
       //websocket.onopen = () => dispatch({ type: 'WEBSOCKET_CONNECTING' });
      // websocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      // websocket.onmessage = (event) => dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });
      break;
      //   case 'WEBSOCKET_MESSAGE ':
      //     // Assuming that your data is a DOMString in JSON format
      //     const data = JSON.parse(action.payload.data);
      //     return { ...state, ...data} 
      // break;
    // User request to send a message
    case 'WEBSOCKET:SEND':
      websocket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case 'WEBSOCKET:DISCONNECT':
      websocket.close();
      break;

    default: // We don't really need the default but ...
    //return state
      break;
  };

  return next(action);
};

export default usocket