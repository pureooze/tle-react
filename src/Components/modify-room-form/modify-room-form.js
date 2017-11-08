import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

class ModifyRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: this.props.rooms,
      selectedRoom: {
        name: "",
        entryText: "Enter Text"
      },
    };

    this.originalRoomValues = Object.assign({}, this.state.selectedRoom)
    this.roomValues = this.originalRoomValues
  }

  handleChange = (e) => {
    this.state.rooms.map((room) => {
      if(e.target.value === room.name){
        this.originalRoomValues = room
      }
    })
    this.roomValues = Object.assign({}, this.originalRoomValues)
    this.setState({
      selectedRoom: this.originalRoomValues
    })
  }

  handleInputChange = (e) => {
    this.roomValues.entryText = e.target.value
    this.setState({
      selectedRoom: this.roomValues
    })
  };

  restoreForm = () => {
    this.roomValues = Object.assign({}, this.originalRoomValues)
    this.setState({
      selectedRoom: this.originalRoomValues
    })
  }

  validateForm = (e) => {
    const value = e.target.value
    if (value !== "" && value !== null && value !== undefined) {
      this.setState({
        submitEnabled: !this.state.submitEnabled
      })
    }
  }

  submitForm = () => {
    console.log(this.roomValues)
  }

  render() {

    let existingRoomEntries

    if (this.props.rooms) {
      existingRoomEntries = this.props.rooms.map(room => (
        <MenuItem key={ room.name } value={ room.name }>
        { room.name }
        </MenuItem>
      ))
    }

    let submitButton
    if (this.state.submitEnabled) {
      submitButton = <Button color="primary" onClick={this.submitForm}> OK </Button>
    } else {
      submitButton = <Button disabled color="primary"> OK </Button>
    }

    return (
      <form className="container" autoComplete="off">
        <Select value={ this.state.selectedRoom.name } onChange={ this.handleChange } displayEmpty>
          { existingRoomEntries }
        </Select>
        <TextField multiline id="room-entry-text" label="Room Entry Text" value={ this.roomValues.entryText } margin="none" fullWidth onBlur={ this.validateForm } onChange={ this.handleInputChange }/>
        { submitButton }
        <Button onClick={ this.restoreForm }>Restore</Button>
      </form>
      );
  }
}

ModifyRoomForm.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default ModifyRoomForm;
