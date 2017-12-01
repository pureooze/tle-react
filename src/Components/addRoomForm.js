import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { DialogContentText, DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class AddRoomForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      room: {}
    }

    this.handleNameChange = (e) => {
      this.props.handleFormChange(e.target.value, 'NAME')
    }

    this.handleDescriptionChange = (e) => {
      this.props.handleFormChange(e.target.value, 'DESC')
    }
  }

  render () {
    let dialogTitle = 'Add Room'
    let contentText = 'New rooms require a name and desciption.'
    const {classes} = this.props

    return (
      <div>
        <DialogTitle>
          { dialogTitle }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            { contentText }
          </DialogContentText>
          <TextField id='name' label='Name' value={this.props.room.name} onChange={this.handleNameChange} fullWidth margin='normal' />
          <TextField id='description' label='Description' value={this.props.room.description} onChange={this.handleDescriptionChange} fullWidth margin='normal' />
          <DialogActions>
            <Button color='primary' className={classes.button} onClick={(e) => this.props.handleAddRoomSubmit()}>
              Ok
            </Button>
            <Button className={classes.button} onClick={this.props.handleDialogClose}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </div>
    )
  }
}

AddRoomForm.propTypes = {
  classes: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  handleAddRoomSubmit: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired
}

export default withStyles(styles)(AddRoomForm)
