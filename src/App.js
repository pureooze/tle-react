import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import TleToolbar from './Components/tle-toolbar/tle-toolbar'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: this.props.rooms
    }
  }

  handleAddNewRoom = (newRoom) => {
    setTimeout(() => {
      let currentRoomList = this.state.rooms
      currentRoomList.push(newRoom)
      this.setState({
        rooms: currentRoomList
      })
    }, 1500)
  }

  handleModifyRoom = (originalRoom, newRoom) => {
    let originalRoomString = JSON.stringify(originalRoom)
    let originalRoomList = this.state.rooms
    originalRoomList.map((room, index) => {
      if (JSON.stringify(room) === originalRoomString) {
        originalRoomList[index] = Object.assign({}, newRoom)
      }
    })

    this.setState({
      rooms: originalRoomList
    })
  }

  render () {
    return (
      <div className='App'>
        <div>
          <AppBar title='My AppBar'>
            <TleToolbar title='TLE' rooms={this.state.rooms} handleAddNewRoom={this.handleAddNewRoom} handleModifyRoom={this.handleModifyRoom} />
          </AppBar>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default App
