import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './add-room-dialog.css'
import Button from 'material-ui/Button'
import Dialog, { DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import AddIcon from 'material-ui-icons/Add';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';
import AddRoomForm from '../add-room-form/add-room-form'

class AddRoomDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0
    };

    this.manageRoomsMessage = "Here you can create new rooms or modify existing ones. To create a new room, click the plus icon. To modify existing ones select the room from the drop down menu."

    this.tabValues = [
      {
        name: "Add Rooms",
        content: <AddRoomForm submitFormHandler={ this.handleSubmitForm } dialogClose={ this.props.dialogClose } />
      },
      {
        name: "Modify Rooms",
        content: <AddRoomForm submitFormHandler={ this.handleSubmitForm } dialogClose={ this.props.dialogClose } />
      },
      {
        name: "?? Rooms",
        content: null
      }
    ]
  }

  handleRequestClose = () => {
    this.props.dialogClose()
  };

  clearForm = () => {
    console.log('TODO: Form should clear')
  }

  handleSubmitForm = () => {
    this.clearForm()
    this.setState({
      submitEnabled: !this.state.submitEnabled
    })
  }

  handleChange = (event, selectedTabIndex) => {
    this.setState({
      selectedTabIndex
    });
  };

  getSelectedTabContent = () => {
    return this.tabValues[this.state.selectedTabIndex].content
  }

  render() {

    let existingRoomEntries,
      visibleTabs;

    if (this.props.rooms) {
      existingRoomEntries = this.props.rooms.map(room => (
        <MenuItem key={ room.name } value={ room.name }>
        { room.name }
        </MenuItem>
      ))
    }

    visibleTabs = this.tabValues.map(tab => (
      <Tab key={ tab.name } label={ tab.name } />
    ))

    return (
      <div>
        <Dialog open={ this.props.open } onRequestClose={ this.handleRequestClose }>
          <DialogTitle>Manage Rooms</DialogTitle>
          <DialogContent>
            <DialogContentText>
              { this.manageRoomsMessage }
            </DialogContentText>
            <Grid container spacing={ 24 }>
              <Grid item xs={ 8 }>
                <Select value={ 10 }>
                  { existingRoomEntries }
                </Select>
              </Grid>
              <Grid item xs={ 3 }>
                <Button fab color="primary" aria-label="Add room">
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
            <Tabs value={ this.state.selectedTabIndex } onChange={ this.handleChange } indicatorColor="primary" textColor="primary" fullWidth>
              { visibleTabs }
            </Tabs>
            { this.getSelectedTabContent() }
          </DialogContent>
        </Dialog>
      </div>
      );
  }
}

AddRoomDialog.propTypes = {
  open: PropTypes.bool,
  dialogClose: PropTypes.func,
  rooms: PropTypes.array.isRequired
}

export default AddRoomDialog;
