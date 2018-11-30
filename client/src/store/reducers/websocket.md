
import {WEBSOCKET_CONNECT,WEBSOCKET_MESSAGE} from '../actions/constants'
import reducers from '.';

const { url: string } = url;
const Uri = "wss://echo.websocket.org/";
websocket = new WebSocket(Uri);
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onclose = function (evt) { onClose(evt) };

// https://gist.github.com/dmichael/9dc767fca93624df58b423d01e485402
// payload: callApi(`http://endpoint/${id}`)

// const url;
const websocketReducer = (state = [], {type, payload}) => {
    switch (type) {
      case WEBSOCKET_CONNECT:
        return payload: websocket.onopen
      default:
        return state
    }
}

// var wsUri = "wss://echo.websocket.org/";
//   var output;

//   function init()
//   {
//     output = document.getElementById("output");
//     testWebSocket();
//   }

//   function testWebSocket()
//   {
//     websocket = new WebSocket(wsUri);
//     websocket.onopen = function(evt) { onOpen(evt) };
//     websocket.onclose = function(evt) { onClose(evt) };
//     websocket.onmessage = function(evt) { onMessage(evt) };
//     websocket.onerror = function(evt) { onError(evt) };
//   }
//


// function tweetsReducer(
//   state: State = [],
//   action: Action): State {
// let tweet: Tweet;
// switch (action.type) {
//   case "ADD_TWEET":
//       ({tweet} = action.payload);
//       return [...state, tweet];
//   default:
//       return state;
// }
// }



// const items = handleActions({
//   [ADD_ITEM](state, { payload: { item } }) {
//     return [ ...state, item ]
//   },
// Student is the model type. The redux state is a just list of students
// type Student = { id: string, gpa: number };
// type State = Student[];

// // An API action creator - the app will dispatch the returned action
// const getStudent: APIActionCretor<string, Student> = (id) => {
//     return {
//         type: "GET_STUDENT",
//         // assuming the API call returns Promise<Student>
//         payload: callApi(`http://endpoint/${id}`)
//     };
// }

// // Reducer - will merge the state and the resolved promise
// const studentReducer: Reducer<State, Student> = (state, action) => {
//     switch (action.type) {
//         case "GET_STUDENT":
//             return [action.payload, ...state];
//         default:
//             return state
//     }
// }/**
 * An example reducer to handle WebSocket messages.
 * NB: There is no error handling!
 */
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEBSOCKET:MESSAGE':
      // Assuming that your data is a DOMString in JSON format
      const data = JSON.parse(action.payload.data);
      return { ...state, ...data}
    default:
      return state
  }
}