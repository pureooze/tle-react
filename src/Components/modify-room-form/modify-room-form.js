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
      selectedRoom: '',
      entryText: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      selectedRoom: e.target.value,
      entryText: e.target.value.entryText
    })
  }

  render() {

    let existingRoomEntries

    if (this.props.rooms) {
      existingRoomEntries = this.props.rooms.map(room => (
        <MenuItem key={ room.name } value={ room }>
        { room.name }
        </MenuItem>
      ))
    }

    return (
      <form className="container" autoComplete="off">
        <Select value={ this.state.selectedRoom } onChange={ this.handleChange } displayEmpty>
          { existingRoomEntries }
        </Select>
        <TextField multiline id="room-entry-text" label="Room Entry Text" value={ this.state.entryText } className="textField" margin="none" fullWidth/>
      </form>
      );
  }
}

ModifyRoomForm.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default ModifyRoomForm;
