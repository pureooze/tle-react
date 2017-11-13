import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs, describe, it } from 'storybook-addon-specifications'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import App from '../App'
import ObjectPropertiesList from '../Components/object-properties-list/object-properties-list'
import RoomList from '../Components/room-list/room-list'
import RoomObject from '../Components/room-object/room-object'
import TleToolbar from '../Components/tle-toolbar/tle-toolbar'
import AddRoomDialog from '../Components/add-room-dialog/add-room-dialog'

import { mount, shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import expect from 'expect'

// <Button onClick={linkTo('Button', 'Second')}>Hello Button</Button>))

Enzyme.configure({
  adapter: new Adapter()
})

let rooms = [
  {
    name: 'The First Room',
    entryText: 'You entered the first room',
    exits: []
  },
  {
    name: 'The Second Room',
    entryText: 'You entered the second room',
    exits: []
  },
  {
    name: 'The Third Room',
    entryText: 'You entered the third room',
    exits: []
  }
]

rooms[0].exits.push({
  name: 'SecondRoom',
  target: rooms[1]
})
// Full App
const appStories = storiesOf('App', module)
appStories.addDecorator(withKnobs)

appStories.add(
  'Default',
  withInfo('Default app values')(() => <App rooms={rooms} />)
)

// Object Properties List
const objectPropertiesListStories = storiesOf('Object Properties List', module)
objectPropertiesListStories.addDecorator(withKnobs)

let objectPropertiesListInput = [
  {
    name: 'The First Prop',
    type: 'text',
    value: 'First'
  },
  {
    name: 'The Second Prop',
    type: 'number',
    value: '10'
  }
]

objectPropertiesListStories.add(
  'No Text',
  withInfo('ObjectPropertiesList with no properties')(() => (
    <ObjectPropertiesList />
  ))
)

objectPropertiesListStories.add(
  'With Text',
  withInfo('ObjectPropertiesList with text and number properties')(function () {
    const story = (
      <ObjectPropertiesList
        properties={object('Properties', objectPropertiesListInput)}
      />
    )

    specs(() =>
      describe('Testing With Text', function () {
        it('Should show the two inputs', function () {
          const output = mount(story)
          const firstInput = <b className='property-label'>The First Prop:</b>
          const secondInput = <b className='property-label'>The Second Prop:</b>
          expect(output.contains(firstInput)).toEqual(true)
          expect(output.contains(secondInput)).toEqual(true)
        })
      })
    )

    return story
  })
)

// Room List
const roomListStories = storiesOf('Room List', module)
roomListStories.addDecorator(withKnobs)

let roomListInput = [
  {
    name: 'The First Room'
  },
  {
    name: 'The Second Room'
  },
  {
    name: 'The Third Room'
  }
]

roomListStories.add(
  'No Text',
  withInfo('RoomList with no rooms')(() => <RoomList />)
)

roomListStories.add(
  'Rooms passed in',
  withInfo('RoomList with rooms')(() => (
    <RoomList
      rooms={object('Rooms', roomListInput)}
      defaultSelection={text('Default Selection', 'Choose Room')}
    />
  ))
)

// Room Object
const roomObjectStories = storiesOf('Room Object', module)
roomObjectStories.addDecorator(withKnobs)

let roomObjectInput = 'MSG'

roomObjectStories.add(
  'Passed in text',
  withInfo('RoomObject with text')(() => (
    <RoomObject name={text('Name', roomObjectInput)} />
  ))
)

// TleToolbar Object
const tleToolbarStories = storiesOf('Tle Toolbar', module)
tleToolbarStories.add(
  'Default',
  withInfo('TleToolbar with defaults ')(() => <TleToolbar />)
)

// Add Room Dialog
const addRoomDialogStories = storiesOf('Add Room Dialog', module)
addRoomDialogStories.addDecorator(withKnobs)

addRoomDialogStories.add(
  'Default',
  withInfo('Default')(() => <AddRoomDialog rooms={rooms} open />)
)

addRoomDialogStories.add(
  'Modify Room open',
  withInfo('Default')(() => (
    <AddRoomDialog rooms={rooms} open selectedTabIndex={1} />
  ))
)
