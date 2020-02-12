import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";

import App from "./components/App";
import { StateProvider } from "./state/State";
import reducer from "./state/reducers";

const initialState = {
  user: null
};

console.log("***:", reducer);

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.querySelector("#root")
);
