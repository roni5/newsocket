import { WEBSOCKET_CONNECT, WEBSOCKET_OPEN, WEBSOCKET_CONNECTING, WEBSOCKET_MESSAGE, WEBSOCKET_CLOSED } from './constants';

let nextDataId = 0

let url = `wss://localhost:8080` 

/**
 * let url = 'wss://localhost:8080'
 * An  action creator to request a WebSocket connection.
 * When you are handling a request, say onclick of an element we need to update the state

In that case we will use like this

<div onClick={this.props.handleClick()} >
this handleClick will be described in the actions, where we will create an action creator. Each action creator contains an action and payload which contains the data we need to pass to the reducers.

A sample action creator will look like the following

const data = 'sample data here'

return {
  type: 'SELECT_ACCOUNT',
  payload: data
}
 */
// Payload is what is bundled in your actions and passed around between reducers in your redux application. For example -

// const someAction = {
//   type: "Test",
//   payload: {user: "Test User", age: 25},
// }
// This is a generally accepted convention to have a type and a payload for an action. The payload can be any valid JS type ( array , object, etc ).

// const addTodoSuccess = todo => ({
//   type: ADD_TODO_SUCCESS,
//   payload: {
//     ...todo
//   }
// });

// export const SET_COUNTER = 'SET_COUNTER'
// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// export const set = (value) => ({
//   type: SET_COUNTER,
//   payload: value
// })

//{payload: ,url: string}

export const getSocket = url => {
  type: WEBSOCKET_OPEN,
      url
     }
    //  export const openSocket = url => {
    //   type: WEBSOCKET_OPEN,
    //       url
    //      }
// export const getSocket = (url = 'wss://localhost:8080') => {
//   type: 'WEBSOCKET_CONNECT'
//   payload: { url }
// }

// export const getSocket = (url = 'wss://localhost:8080') => {
//   type: 'WEBSOCKET_CONNECTING',
//   payload: { url }
// }

export const getMessage = data => ({
  type: 'WEBSOCKET_MESSAGE',
  id: nextDataId++,
  data
})

// export const getMessage = data => ({
//   type: WEBSOCKET_MESSAGE,
//   payload: {
//     timestamp: Date,
//     event: Event,
//     data
//   }
// })

// export const toggle = id => ({
//   type: 'WEBSOCKET_CLOSED',
//   id
// })

export const close = id => ({
  type: WEBSOCKET_CLOSED,
  payload: {
    timestamp: Date,
    event: Event
  },
  id
})


