import React from 'react'
import './tle-toolbar.css'
import TleToolbarButton from '../tle-toolbar-button/tle-toolbar-button'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TleToolbar extends React.Component {
  render() {
    let addRoomButton = <TleToolbarButton className="flex-item" title='Add' />
    let removeRoomButton = <TleToolbarButton className="flex-item" title='Remove' />

    return (
      <div>
        <MuiThemeProvider>
          { addRoomButton }
          { removeRoomButton }
        </MuiThemeProvider>
      </div>
    )
  }
}

export default TleToolbar
