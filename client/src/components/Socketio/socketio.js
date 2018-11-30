import React, { Component } from 'react'


var socket = io();
var data = {
    socketio: [{key: '',name: '',markup: ''}]
  };
export default class socketio extends Component {

    componentDidMount() {
        socket.on('data', this.handleData);
      }
    
      componentWillUnmount() {
        socket.removeListener('data', this.handleData);
      }
    
      handleData(data) {
         this.setState(data);
      } 
    
      getInitialState() {
        return data;
      }
    
      handleChange() {
        this.setState(data);
      }

    render() {
      const {data} =  this.state
    return (
      <div>
        {data}
      </div>
    )
  }
}

