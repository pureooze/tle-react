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

import { openDrawer, closeDrawer } from '../actions/drawerActions'

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
      this.handleCloseDrawer()
      console.log('Add room')
    }
  }

  render() {
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
                <RoomModificationListItems handleAddRoom={ this.handleAddRoom } />
              </List>
            </div>
          </Drawer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    drawerOpen: store.AppReducer.drawerOpen
  }
}

App.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(App)
