import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog'

class AppDialog extends Component {
  render() {
    return (
      <div>
        <Dialog open={ this.props.appDialogOpen } onRequestClose={ this.props.handleAppDialogClose }>
          { this.props.children }
        </Dialog>
      </div>
    )
  }
}

AppDialog.propTypes = {
  appDialogOpen: PropTypes.bool.isRequired,
  handleAppDialogClose: PropTypes.func.isRequired
}

export default AppDialog
