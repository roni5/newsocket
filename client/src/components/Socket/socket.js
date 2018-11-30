import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getSocket} from '../../store/actions/websocket'
// import './customers.css';

class Socket extends Component {

  static propTypes = {
    getSocket: PropTypes.func.isRequired,
    sockets: PropTypes.array.isRequired
  }

  static defaultProps = {
    sockets: []
  }

  componentWillMount() {
    this.props.getSocket();
  }

  render() {

    return (
      <div>
        <h2>Socket</h2>
        <ul>
        {this.props.sockets.map(socket =>
          <li key={socket.id}>{socket.data} Socket </li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sockets: state.sockets
})

const dispatchToProps = (dispatch) => ({
  getSocket : () => dispatch(getSocket())
})




export default connect(mapStateToProps, dispatchToProps)(Socket);