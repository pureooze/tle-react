import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitEnabled: false
    };
  }

  validateForm = (e) => {
    const value = e.target.value
    if (value !== "" && value !== null && value !== undefined) {
      this.setState({
        submitEnabled: !this.state.submitEnabled
      })
    }
  }

  render() {

    let submitButton
    if (this.state.submitEnabled) {
      submitButton = <Button raised color="primary" className="room-button" onClick={ this.props.submitFormHandler }> OK </Button>
    } else {
      submitButton = <Button raised disabled color="primary" className="room-button"> OK </Button>
    }

    return (
      <form className="container" autoComplete="off">
        <TextField required autoFocus id="room-name" label="Room Name" type="text" onBlur={ this.validateForm } />
        <TextField multiline id="room-entry-text" label="Room Entry Text" defaultValue="Message to display on entry" className="textField" margin="normal" fullWidth/>
        { submitButton }
        <Button raised className="room-button" onClick={ this.clearForm }>Clear</Button>
      </form>
      );
  }
}

AddRoomForm.propTypes = {
  submitFormHandler: PropTypes.func.isRequired
}

export default AddRoomForm;