import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import TleToolbar from './Components/tle-toolbar/tle-toolbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: this.props.rooms
    };
  }

  handleAddNewRoom = (newRoom) => {
    setTimeout(() => {
      let currentRoomList = this.state.rooms
      currentRoomList.push(newRoom)
      this.setState({
        rooms: currentRoomList
      })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <div>
          <AppBar title="My AppBar">
            <TleToolbar title="TLE" rooms={ this.state.rooms } handleAddNewRoom={ this.handleAddNewRoom } />
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
