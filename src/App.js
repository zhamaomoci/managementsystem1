import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import {Button} from 'antd';

class App extends Component {
  render() {
    return (
        <div>
            {this.props.children}
        </div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Button>antd</Button>
    //   </div>
    );
  }
}

export default App;
