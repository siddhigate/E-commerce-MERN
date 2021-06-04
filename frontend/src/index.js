import React from "react";
import Routes from "./Routes";

import { StrictMode } from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  rootElement
);
