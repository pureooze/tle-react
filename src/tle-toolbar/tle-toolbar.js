import React from 'react'
import './tle-toolbar.css'
// import TleToolbarButton from '../tle-toolbar-button/tle-toolbar-button'
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

class TleToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };

    this.handleClick = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    this.handleRequestClose = () => {
      this.setState({
        anchorEl: null
      });
    };

  }

  render() {
    const options = [
      'Add',
      'Remove'
    ];

    const ITEM_HEIGHT = 48;
    const open = Boolean(this.state.anchorEl);

    return (
      <div>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={ this.handleClick }>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Title
          </Typography>
          <Menu id="long-menu" anchorEl={ this.state.anchorEl } open={ open } onRequestClose={ this.handleRequestClose } PaperProps={ { style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200, }, } }>
            { options.map(option => (
                <MenuItem key={ option } selected={ option === 'Pyxis' } onClick={ this.handleRequestClose }>
                { option }
                </MenuItem>
              )) }
          </Menu>
        </Toolbar>
      </div>
    )
  }
}

export default TleToolbar
