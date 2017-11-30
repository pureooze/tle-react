import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import List from 'material-ui/List'
import RoomModificationListItems from '../Components/roomModificationListItems'
import AppDialog from '../Components/appDialog'
import AddRoomForm from '../Components/addRoomForm'
import EditRoomForm from '../Components/editRoomForm'

import { openDrawer, closeDrawer } from '../actions/drawerActions'
import { openAppDialog, loadAddRoomDialog, closeAppDialog, addNewRoom, loadEditRoomDialog } from '../actions/appDialogActions'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleOpenDrawer = (e) => {
      this.props.dispatch(openDrawer())
    }

    this.handleCloseDrawer = (e) => {
      this.props.dispatch(closeDrawer())
    }

    this.handleAddRoom = (e) => {
      this.props.dispatch(openAppDialog())
      this.props.dispatch(loadAddRoomDialog())
    }

    this.handleEditRoom = (e) => {
      this.props.dispatch(openAppDialog())
      this.props.dispatch(loadEditRoomDialog())
    }

    this.handleAppDialogClose = (e) => {
      this.props.dispatch(closeAppDialog())
    }

    this.handleAddRoomSubmit = (newRoom) => {
      var roomId = new Uint32Array(1)
      window.crypto.getRandomValues(roomId)
      newRoom.id = roomId

      this.props.dispatch(addNewRoom(newRoom))
      this.props.dispatch(closeAppDialog())
    }

    this.getDialogContent = () => {
      switch (this.props.appDialogType) {
        case 'ADD_ROOM':
          return <AddRoomForm handleDialogClose={ this.handleAppDialogClose } handleAddRoomSubmit={ this.handleAddRoomSubmit } />
        case 'EDIT_ROOM':
          return <EditRoomForm rooms={ this.props.rooms } handleDialogClose={ this.handleAppDialogClose } handleAddRoomSubmit={ this.handleAddRoomSubmit } />
        default:
          return <div />
      }
    }
  }

  render() {
    let dialogContent = this.getDialogContent()

    return (
      <div className='App'>
        <div>
          <AppBar title='My AppBar'>
            <Toolbar>
              <IconButton color='contrast' aria-label='Menu' onClick={ this.handleOpenDrawer }>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer type='persistent' anchor={ this.props.anchor } open={ this.props.drawerOpen }>
            <div>
              <div>
                <IconButton onClick={ this.handleCloseDrawer }>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <RoomModificationListItems handleAddRoom={ this.handleAddRoom } handleEditRoom={ this.handleEditRoom } />
              </List>
            </div>
          </Drawer>
        </div>
        <AppDialog appDialogOpen={ this.props.appDialogOpen } handleAppDialogClose={ this.handleAppDialogClose }>
          { dialogContent }
        </AppDialog>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    drawerOpen: store.AppReducer.drawerOpen,
    appDialogOpen: store.AppReducer.appDialogOpen,
    appDialogType: store.AppReducer.appDialogType,
    rooms: store.AppReducer.rooms
  }
}

export default connect(mapStateToProps)(App)
