import React from 'react'

import { storiesOf } from '@storybook/react'
import { specs, describe, it } from 'storybook-addon-specifications'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import { mount, shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import expect from 'expect'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tleApp from '../reducers'

import App from '../Wrapper/App'

let store = createStore(tleApp, {
  AppReducer: {
    drawerOpen: false,
    anchor: 'left',
    appDialogOpen: false
  }
})

Enzyme.configure({
  adapter: new Adapter()
})

let rooms = [
  {
    id: 0,
    name: 'The First Room',
    entryText: 'You entered the first room',
    exits: []
  },
  {
    id: 1,
    name: 'The Second Room',
    entryText: 'You entered the second room',
    exits: []
  },
  {
    id: 2,
    name: 'The Third Room',
    entryText: 'You entered the third room',
    exits: []
  }
]

rooms[0].exits.push({
  name: 'SecondRoom',
  targetID: 1
})

// Full App
const appStories = storiesOf('App', module)
appStories.addDecorator(withKnobs)

appStories.add(
  'Default',
  withInfo('Default app values')(() => <Provider store={store}>
    <App rooms={rooms} />
  </Provider>)
)
