import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import AddIcon from 'material-ui-icons/Add'
import RemoveIcon from 'material-ui-icons/Remove'

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
        <ListItem button>
          <ListItemIcon>
            <RemoveIcon />
          </ListItemIcon>
          <ListItemText primary='Remove Room' />
        </ListItem>
      </div>
    )
  }
}

RoomModificationListItems.propTypes = {
  handleAddRoom: PropTypes.func.isRequired
}

export default RoomModificationListItems
