import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers'
import Socket from './components/Socket/Socket'
import Message from './components/GetMessage/Message'
// import Socket from './components/Socket/Socket'
class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">React/Redux Blinds</h1>
          </header>
          <Customers />
          <Message  > Heel </Message>
          <Socket />
        </div>
      </Provider>
    )
  }
}

export default App
