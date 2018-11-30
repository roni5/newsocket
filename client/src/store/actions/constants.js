export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const UPDATE_CUSTOMER = "REMOVE_CUSTOMER";

// Action types to be dispatched by the user
// export const WEBSOCKET_CONNECT = "WEBSOCKET_CONNECT";
 export const WEBSOCKET_DISCONNECT  = "WEBSOCKET_DISCONNECT ";
 export const WEBSOCKET_SEND =  "WEBSOCKET_SEND";

// Action types dispatched by the WebSocket implementation.
// These would be caught by reducers or other middleware.
export const  WEBSOCKET_CONNECT = "WEBSOCKET_CONNECT";
 export const  WEBSOCKET_CONNECTING = "WEBSOCKET_CONNECTING ";
 export const  WEBSOCKET_OPEN  = "WEBSOCKET_OPEN";
 export const  WEBSOCKET_CLOSED  = "WEBSOCKET_CLOSED ";
 export const  WEBSOCKET_MESSAGE  = "WEBSOCKET_MESSAGE";