import React, { Component } from 'react'
import './room-list.css'
import Menu, { MenuItem } from 'material-ui/Menu';
import PropTypes from 'prop-types';

class RoomList extends Component {
  render() {
    let roomList = {}

    if (this.props.rooms === undefined) {
      roomList = <span>No rooms to display</span>
    } else {
      roomList = <Menu value={ this.props.defaultSelection }>
                   <MenuItem disabled hidden>
                   { this.props.defaultSelection }
                   </MenuItem>
                   { this.props.rooms.map(function(room, roomKey) {
                       return (
                         <MenuItem key={ roomKey }>
                         { room.name }
                         </MenuItem>
                       )
                     }) }
                 </Menu>
    }

    return (
      <div>
        <Button>
          { roomList }
        </Button>
      </div>
    )
  }
}

RoomList.propTypes = {
  defaultSelection: PropTypes.string,
  rooms: PropTypes.array
}

export default RoomList
