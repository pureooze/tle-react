import React, { Component } from 'react';
import './room-list.css';

class RoomList extends Component {
  render() {

    let roomList = {}

    if(this.props.rooms === undefined){
      roomList = <span>No rooms to display</span>
    }else{
      roomList =
        <select value={this.props.defaultSelection}>
          <option className="room-label" disabled hidden>{this.props.defaultSelection}</option>
          {
            this.props.rooms.map(function(room, roomKey) {
              return (
                <option className="room-label" key={roomKey}>{room.name}</option>
              );
            })
          }
        </select>
    }

    return (
      <div>
          {roomList}
      </div>
    );
  }
}

export default RoomList;
