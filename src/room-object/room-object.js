import React, { Component } from 'react';
import './room-object.css';

class RoomObject extends Component {
  render() {

    return (
      <div className="room">
        <div className="room-box">
        </div>
        <p >{this.props.name}</p>
      </div>
    );
  }
}

export default RoomObject;
