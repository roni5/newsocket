import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import { getMessage } from '../../store/actions/websocket'

// import './customers.css';

class Message extends Component {

  static propTypes = {
    getmessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
  }

  static defaultProps = {
    messages: []
  }

  componentWillMount() {
    this.props.getMessage();
    // this.props.getMessage();
    // console.log(url, "this is a websocket");
  }

    // store.dispatch({
//   type: WEBSOCKET_CONNECTING,
//   payload: {
//     url: 'wss://localhost:8080'
//   }
// })
  render() {
    const {messages} = this.props
    return (
      <div>
        <h2>Message</h2>
        {/* <ul>
        {this.props.messages.map(message =>
          <li key={messages.id}>{message} Message </li>
        )}
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

const dispatchToProps = (dispatch) => ({
  getMessage : () => dispatch(getMessage())
})




export default connect(mapStateToProps, dispatchToProps)(Message);