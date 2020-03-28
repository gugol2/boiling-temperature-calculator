import React from "react";
import ReactDOM from "react-dom";

import { Calculator } from "./Calculator";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  rootElement
);
