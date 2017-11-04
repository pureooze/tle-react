import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './add-room-dialog.css'
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';

class AddRoomDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      submitEnabled: false
    };

    this.handleRequestClose = () => {
      this.setState({
        open: false
      });
    };

    this.clearForm = () => {
      console.log('Form should clear')
    }

    this.enableSubmit = () => {
      this.setState({
        submitEnabled: true
      })
    }

    this.disableSubmit = () => {
      this.setState({
        submitEnabled: false
      })
    }

    this.validateForm = (e) => {
      const value = e.target.value
      if (value !== "" && value !== null && value !== undefined) {
        this.enableSubmit()
      } else {
        this.disableSubmit()
      }
    }

    this.submitForm = () => {
      alert("Submitted")
    }
  }

  render() {

    let submitButton;
    if (this.state.submitEnabled) {
      submitButton = <Button raised color="primary" className="room-button" onClick={ this.submitForm }> OK </Button>
    } else {
      submitButton = <Button raised disabled color="primary" className="room-button" onClick={ this.submitForm }> OK </Button>
    }

    return (
      <div>
        <Dialog open={ this.state.open } onRequestClose={ this.handleRequestClose }>
          <DialogTitle>Manage Rooms</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates occationally.
            </DialogContentText>
            <form className="container" autoComplete="off">
              <TextField required autoFocus id="room-name" label="Room Name" type="text" onBlur={ this.validateForm } />
              <TextField multiline id="room-entry-text" label="Room Entry Text" defaultValue="Message to display on entry" className="textField" margin="normal" fullWidth/>
              { submitButton }
              <Button raised className="room-button" onClick={ this.clearForm }>Clear</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      );
  }
}

AddRoomDialog.propTypes = {
  open: PropTypes.bool
}

export default AddRoomDialog;
