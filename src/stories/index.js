import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { specs, describe, it } from 'storybook-addon-specifications'
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import ObjectPropertiesList from '../object-properties-list/object-properties-list';
import RoomList from '../room-list/room-list';

import Enzyme from 'enzyme';
import {mount, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import expect from "expect";

// <Button onClick={linkTo('Button', 'Second')}>Hello Button</Button>))

Enzyme.configure({ adapter: new Adapter() });

//Object Properties List
const objectPropertiesListStories = storiesOf('Object Properties List', module);
objectPropertiesListStories.addDecorator(withKnobs);

let objectPropertiesListInput = [
  {
    name: "The First Prop",
    type: "text",
    value: "First"
  },
  {
    name: "The Second Prop",
    type: "number",
    value: "10"
  }
]

objectPropertiesListStories.add('No Text', withInfo('ObjectPropertiesList with no properties')
    (() => <ObjectPropertiesList />))

objectPropertiesListStories.add('With Text', withInfo('ObjectPropertiesList with text and number properties') (function () {
  const story = <ObjectPropertiesList properties={object('Properties', objectPropertiesListInput)}/>

  specs(() => describe('Testing With Text', function () {
    it('Should show the two inputs', function () {
      const output = mount(story);
      const firstInput = <b className="property-label">The First Prop:</b>;
      const secondInput = <b className="property-label">The Second Prop:</b>;
      expect(output.contains(firstInput)).toEqual(true);
    });
  }));

  return story;
}))

//Room List
const roomListStories = storiesOf('Room List', module);
roomListStories.addDecorator(withKnobs);

let roomListInput = [
  {
    name: "The First Room"
  },
  {
    name: "The Second Room"
  },
  {
    name: "The Third Room"
  }
]

roomListStories.add('No Text', withInfo('RoomList with no rooms')
(() => <RoomList />))

roomListStories.add('Rooms passed in', withInfo('RoomList with rooms')
(() => <RoomList rooms={object('Rooms', roomListInput)}
                 defaultSelection={text("Default Selection","Choose Room")}/>))
