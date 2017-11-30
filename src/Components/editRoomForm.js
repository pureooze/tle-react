import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { DialogContentText, DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui-icons/Edit'
import DeleteIcon from 'material-ui-icons/Delete'

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

class EditRoomForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: this.props.rooms
    }

    this.handleDeleteRoom = (e) => {
      let roomList = this.state.rooms
      roomList.pop()
      this.setState({
        rooms: roomList
      })
    }
  }

  render() {
    let dialogTitle = 'Edit Rooms'
    let roomSelector
    const {classes} = this.props

    if (this.props.rooms.length > 0) {
      let roomSelections = this.props.rooms.map((room, key) => (
        <MenuItem key={ key } value={ room.id }>
        { room.name }
        </MenuItem>
      ))

      roomSelector = (<div>
                        <Select value={ this.props.rooms[0].id } onChange={ this.handleChange }>
                          { roomSelections }
                        </Select>
                        <IconButton color='primary' className={ classes.button } aria-label='Edit Room'>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={ this.handleDeleteRoom } color='primary' className={ classes.button } aria-label='Delete Room'>
                          <DeleteIcon />
                        </IconButton>
                      </div>)
    } else {
      roomSelector = <DialogContentText>There are currently no rooms to edit.</DialogContentText>
    }

    return (
      <div>
        <DialogTitle>
          { dialogTitle }
        </DialogTitle>
        <DialogContent>
          { roomSelector }
          <DialogActions>
            <Button color='primary' className={ classes.button } onClick={ (e) => this.props.handleAddRoomSubmit(this.state.room) }>
              Ok
            </Button>
            <Button className={ classes.button } onClick={ this.props.handleDialogClose }>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </div>
    )
  }
}

EditRoomForm.propTypes = {
  classes: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired
}

export default withStyles(styles)(EditRoomForm)
