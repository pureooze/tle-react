import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TleToolbar from './Components/tle-toolbar/tle-toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AppBar title="My AppBar">
            <TleToolbar title="TLE" />
          </AppBar>
        </div>
      </div>
      );
  }
}

export default App;
