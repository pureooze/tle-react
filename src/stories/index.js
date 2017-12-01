import React from "react";

import { storiesOf } from "@storybook/react";
import { specs, describe, it } from "storybook-addon-specifications";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object, text } from "@storybook/addon-knobs";

import { mount, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";

import { Provider } from "react-redux";
import { createStore } from "redux";
import tleApp from "../reducers";

import App from "../Wrapper/App";

Enzyme.configure({
  adapter: new Adapter()
});

let rooms = [
  {
    id: 0,
    name: "The First Room",
    entryText: "You entered the first room",
    exits: []
  },
  {
    id: 1,
    name: "The Second Room",
    entryText: "You entered the second room",
    exits: []
  },
  {
    id: 2,
    name: "The Third Room",
    entryText: "You entered the third room",
    exits: []
  }
];

rooms[0].exits.push({
  name: "SecondRoom",
  targetID: 1
});

// Full App
const appStories = storiesOf("App", module);
appStories.addDecorator(withKnobs);

let store = createStore(tleApp, {
  AppReducer: {
    drawerOpen: false,
    anchor: "left",
    appDialogOpen: false,
    appDialogType: "",
    selectedRoom: "",
    rooms: [],
    addRoomForm: {
      name: "",
      description: ""
    }
  }
});

appStories.add(
  "Default",
  withInfo("Default app values")(() => (
    <Provider store={store}>
      <App rooms={rooms} />
    </Provider>
  ))
);

// Edit Room Form
store = createStore(tleApp, {
  AppReducer: {
    drawerOpen: true,
    anchor: "left",
    appDialogOpen: true,
    appDialogType: "EDIT_ROOM",
    selectedRoom: undefined,
    rooms: [
      {
        id: 4892348943,
        name: "New Room",
        description: "This is a room"
      },
      {
        id: 4892348090,
        name: "Second Room",
        description: "The second room in the game"
      }
    ],
    addRoomForm: {
      name: "",
      description: ""
    }
  }
});

const editRoomFormStories = storiesOf("Edit Room Form", module);
editRoomFormStories.addDecorator(withKnobs);

editRoomFormStories.add(
  "Room Exists",
  withInfo("Room exists")(() => (
    <Provider store={store}>
      <App rooms={rooms} />
    </Provider>
  ))
);
