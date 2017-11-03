import React from 'react'
import PropTypes from 'prop-types';
import './tle-toolbar-button.css'
import RaisedButton from 'material-ui/RaisedButton';

class TleToolbarButton extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton label={ this.props.title } />
      </div>
    )
  }
}

TleToolbarButton.propTypes = {
  title: PropTypes.string
}

export default TleToolbarButton
