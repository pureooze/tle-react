import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { DialogContentText, DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import TextField from 'material-ui/TextField'

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
      rooms: this.props.rooms.slice(),
      selectedRoom: Object.assign({}, this.props.rooms[0])
    }

    this.handleDeleteRoom = (e) => {
      let roomList = this.state.rooms.map((room) => {
        if (room.id !== this.state.selectedRoom.id) {
          return room
        }
      })
      this.setState({
        rooms: roomList,
        selectedRoom: Object.assign({}, roomList[0])
      })
    }

    this.handleRoomSelectionChange = (e) => {
      for (let room of this.state.rooms) {
        if (room.id === e.target.value) {
          this.setState({
            selectedRoom: Object.assign({}, room)
          })
        }
      }
    }

    this.handleNameChange = (e) => {
      let selectedRoom = Object.assign({}, this.state.selectedRoom)
      let rooms = this.state.rooms.map((room) => {
        if(room.id === selectedRoom.id){
          room.name = e.target.value
          selectedRoom.name = e.target.value
        }

        return room
      })

      this.setState({
        rooms,
        selectedRoom
      })
    }

    this.handleDescriptionChange = (e) => {
      let selectedRoom = Object.assign({}, this.state.selectedRoom)
      let rooms = this.state.rooms.map((room) => {
        if(room.id === selectedRoom.id){
          room.description = e.target.value
          selectedRoom.description = e.target.value
        }

        return room
      })

      this.setState({
        rooms,
        selectedRoom
      })
    }
  }

  render() {
    let dialogTitle = 'Edit Rooms'
    let roomSelector
    const {classes} = this.props

    console.log(this.state.selectedRoom)
    if (this.state.rooms.length > 0 && this.state.selectedRoom !== undefined) {
      let roomSelections = this.state.rooms.map((room, key) => (
        <MenuItem key={ key } value={ room.id }>
        { room.name }
        </MenuItem>
      ))

      roomSelector = (<div>
                        <div>
                          <Select value={ this.state.selectedRoom.id } onChange={ this.handleRoomSelectionChange }>
                            { roomSelections }
                          </Select>
                          <IconButton onClick={ this.handleDeleteRoom } color='primary' className={ classes.button } aria-label='Delete Room'>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                        <div>
                          <TextField onChange={this.handleNameChange} id='name' label='Name' value={ this.state.selectedRoom.name } className={ classes.textField } margin='normal' />
                          <TextField onChange={this.handleDescriptionChange} id='description' label='Description' value={ this.state.selectedRoom.description } className={ classes.textField } margin='normal' />
                        </div>
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
            <Button color='primary' className={ classes.button } onClick={ (e) => this.props.handleEditRoomSubmit(this.state.rooms) }>
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
  rooms: PropTypes.array.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  handleEditRoomSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(EditRoomForm)
