import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitEnabled: false,
      addRoomSuccess: false,
      submitInProgress: false
    };

    this.styles = theme => ({
      root: {
        display: 'flex',
        alignItems: 'center',
      },
      wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
      },
      buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700],
        },
      },
      fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
      },
      buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
    });
  }

  validateForm = (e) => {
    const value = e.target.value
    if (value !== "" && value !== null && value !== undefined) {
      this.setState({
        submitEnabled: !this.state.submitEnabled
      })
    }
  }

  attemptRoomSubmission = () => {
    let promise = new Promise((resolve, reject) => {
      this.props.submitFormHandler({
        name: 'The Next Room',
        entryText: "You entered the next room"
      })
      setTimeout(resolve("Room added successfully"), 3000)
    }
    )

    promise.then(() => this.setState({
      addRoomSuccess: true,
      submitInProgress: false
    }))
  }
  addNewRoom = (e) => {
    if (!this.state.submitInProgress) {
      this.setState({
        addRoomSuccess: false,
        submitInProgress: true
      },
        this.attemptRoomSubmission()
      )
    }
  }

  render() {
    const classes = this.styles;

    let buttonClassname
    if (this.state.addRoomSuccess) {
      buttonClassname = "success"
    } else {
      buttonClassname = "progress"
    }

    let submitButton
    if (this.state.submitEnabled) {
      submitButton = <div className={ classes.wrapper }>
                       <Button raised disabled={ this.state.submitInProgress } className={ buttonClassname } onClick={ this.addNewRoom }> OK </Button>
                       { this.state.submitInProgress && <CircularProgress size={ 24 } className={ classes.buttonProgress } /> }
                     </div>
    } else {
      submitButton = <Button disabled color="primary" className="room-button"> OK </Button>
    }

    return (
      <form className="container" autoComplete="off">
        <TextField required autoFocus id="room-name" label="Room Name" type="textField" margin="none" onBlur={ this.validateForm } />
        <TextField multiline id="room-entry-text" label="Room Entry Text" defaultValue="Message to display on entry" className="textField" margin="none" fullWidth/>
        { submitButton }
        <Button className="room-button" onClick={ this.clearForm }>Clear</Button>
      </form>
      );
  }
}

AddRoomForm.propTypes = {
  submitFormHandler: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired
}

export default AddRoomForm;