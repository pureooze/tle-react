import React, { Component } from 'react';
import './App.css';
import ObjectPropertiesList from './object-properties-list/object-properties-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ObjectPropertiesList />
      </div>
    );
  }
}

export default App;
