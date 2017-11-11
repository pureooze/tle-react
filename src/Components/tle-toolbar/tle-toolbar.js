import React from 'react'
import PropTypes from 'prop-types';

// import TleToolbarButton from '../tle-toolbar-button/tle-toolbar-button'
import AddRoomDialog from '../add-room-dialog/add-room-dialog'

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

class TleToolbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      addRoomDialogIsVisible: false
    };

  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleMenuSelection = (action, e) => {
    this.handleRequestClose()
    action()
  }

  dialogCloseHandler = () => {
    this.setState({
      addRoomDialogIsVisible: !this.state.addRoomDialogIsVisible
    })
  }

  options =[
    {
      name: 'Manage Rooms',
      action: () => {
        this.setState({
          addRoomDialogIsVisible: !this.state.addRoomDialogIsVisible
        })
      }
    },
    {
      name: 'Remove',
      action: () => {
        console.log("Remove")
      }
    }
  ];

  render() {

    const ITEM_HEIGHT = 48;
    const open = Boolean(this.state.anchorEl);

    let menuItems = this.options.map(option => (
      <MenuItem key={ option.name } onClick={ (e) => this.handleMenuSelection(option.action, e) }>
      { option.name }
      </MenuItem>
    ))

    return (
      <div>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            { this.props.title }
          </Typography>
          <Menu id="long-menu" anchorEl={ this.state.anchorEl } open={ open } onRequestClose={ this.handleRequestClose } PaperProps={ { style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200, }, } }>
            { menuItems }
          </Menu>
          <IconButton color="contrast" aria-label="More" onClick={ this.handleClick }>
            <MoreVertIcon />
          </IconButton>
          <AddRoomDialog rooms={ this.props.rooms } open={ this.state.addRoomDialogIsVisible } dialogClose={ this.dialogCloseHandler } handleAddNewRoom={ this.props.handleAddNewRoom } handleModifyRoom={this.props.handleModifyRoom} />
        </Toolbar>
      </div>
    )
  }
}

TleToolbar.propTypes = {
  title: PropTypes.string,
  rooms: PropTypes.array.isRequired,
  handleAddNewRoom: PropTypes.func.isRequired
}

export default TleToolbar
