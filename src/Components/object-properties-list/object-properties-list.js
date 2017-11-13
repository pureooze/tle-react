import React, { Component } from 'react'
import './object-properties-list.css'

class ObjectPropertiesList extends Component {
  render () {
    let properties = {}

    if (this.props.properties === undefined) {
      properties = <b>No properties to display</b>
    } else {
      properties = this.props.properties.map(function (property, propKey) {
        return (
          <div className='property' key={propKey}>
            <b className='property-label'>{property.name}:</b>
            <input className='property-input' defaultValue={property.value} type={property.type} />
          </div>
        )
      })
    }

    return (
      <div>
        {properties}
      </div>
    )
  }
}

export default ObjectPropertiesList
