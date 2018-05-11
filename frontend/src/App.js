import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    axios.get('/api')
    .then(result => this.setState({data: result.data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>take a look at all our django data: {this.state.data} </h2>
      </div>
    );
  }
}

export default App;
