import { WEBSOCKET_CONNECT } from '@giantmachines/redux-websocket'

store.dispatch({
  type: WEBSOCKET_CONNECT,
  payload: {
    url: 'wss://localhost:8080'
  }
})