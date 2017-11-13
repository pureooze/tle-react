import React from 'react'
import PropTypes from 'prop-types'

class TleMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: this.props.anchorEl
    }
  }

  render () {
    return (
      <div />
    )
  }
}

TleMenu.propTypes = {
  open: PropTypes.Boolean,
  anchorEl: PropTypes.any
}

export default TleMenu
