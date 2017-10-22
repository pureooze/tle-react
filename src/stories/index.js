import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { specs, describe, it } from 'storybook-addon-specifications'
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';

import ObjectPropertiesList from '../object-properties-list/object-properties-list';

import {mount} from "enzyme";
import expect from "expect";

// <Button onClick={linkTo('Button', 'Second')}>Hello Button</Button>))

//Object Properties List
const objectPropertiesListStories = storiesOf('Object Properties List', module);
objectPropertiesListStories.addDecorator(withKnobs);

let objectPropertiesListInput = [
  {
    name: "The First Prop",
    type: "text"
  },
  {
    name: "The Second Prop",
    type: "number"
  }
]

objectPropertiesListStories.add('No Text', withInfo('ObjectPropertiesList with no properties')
    (() => <ObjectPropertiesList />))

objectPropertiesListStories.add('With Text', withInfo('ObjectPropertiesList with text and number properties')
(() => <ObjectPropertiesList properties={object('Properties', objectPropertiesListInput)}/>))
