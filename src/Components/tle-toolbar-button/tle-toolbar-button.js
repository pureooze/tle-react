import React from 'react'
import PropTypes from 'prop-types'
import './tle-toolbar-button.css'

class TleToolbarButton extends React.Component {
  render () {
    return (
      <RaisedButton label={this.props.title} primary />
    )
  }
}

TleToolbarButton.propTypes = {
  title: PropTypes.string
}

export default TleToolbarButton
