import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import AddIcon from 'material-ui-icons/Add'
import EditIcon from 'material-ui-icons/Edit'

class RoomModificationListItems extends Component {
  render() {
    return (
      <div>
        <ListItem button onClick={ this.props.handleAddRoom }>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary='Add Room' />
        </ListItem>
        <ListItem button onClick={ this.props.handleEditRoom }>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary='Edit Room' />
        </ListItem>
      </div>
    )
  }
}

RoomModificationListItems.propTypes = {
  handleAddRoom: PropTypes.func.isRequired,
  handleEditRoom: PropTypes.func.isRequired
}

export default RoomModificationListItems
