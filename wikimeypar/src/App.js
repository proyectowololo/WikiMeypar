import React, { Component } from 'react';
import logo from './aj0c06i.gif';
import './App.css';
import LeerLogs from './snh/LeerLogs';
import ADV_PS_Efectivo from './snh/ADV_PS_Efectivo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <LeerLogs/>
            <ADV_PS_Efectivo/>
          </p>
                  
        </header>
      </div>
    );
  }
}

export default App;
