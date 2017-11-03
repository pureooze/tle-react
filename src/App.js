import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TleToolbar from './tle-toolbar/tle-toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="My AppBar" />
          <TleToolbar/>
        </MuiThemeProvider>
      </div>
      );
  }
}

export default App;
