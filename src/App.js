import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import TleToolbar from './Components/tle-toolbar/tle-toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AppBar title="My AppBar">
            <TleToolbar title="TLE" rooms={ this.props.rooms } />
          </AppBar>
        </div>
      </div>
      );
  }
}

App.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default App;
