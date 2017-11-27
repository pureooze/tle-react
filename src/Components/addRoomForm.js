import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { DialogContentText } from 'material-ui/Dialog'

class AddRoomForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleNameChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
  }

  render () {
    let contentText = 'New rooms require a name and desciption.'
    return (
      <div>
        <DialogContentText>
          { contentText }
        </DialogContentText>
        <FormControl fullWidth>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input id='name' value={this.state.name} onChange={this.handleNameChange} />
        </FormControl>
      </div>
    )
  }
}

export default AddRoomForm
