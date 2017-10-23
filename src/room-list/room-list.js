import React, { Component } from 'react';
import './room-list.css';

class RoomList extends Component {
  render() {

    let roomList = {}

    if(this.props.rooms === undefined){
      roomList = <b>No rooms to display</b>
    }else{
      roomList = this.props.rooms.map(function(room, roomKey) {
        return (
          <div className="room-list" key={roomKey}>
            <span className="room-label">{room.name}</span>
          </div>
        );
      })
    }

    return (
      <div>
        {roomList}
      </div>
    );
  }
}

export default RoomList;
