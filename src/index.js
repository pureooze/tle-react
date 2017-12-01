import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Wrapper/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import tleApp from "./reducers";

import registerServiceWorker from "./registerServiceWorker";

let store = createStore(tleApp, {
  AppReducer: {
    drawerOpen: false,
    anchor: "left",
    appDialogOpen: false,
    appDialogType: "",
    selectedRoom: null,
    rooms: [],
    addRoomForm: {
      name: "",
      description: ""
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
