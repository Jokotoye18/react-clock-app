import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GeoLocationProvider } from "./context/GeoLocationContext";

ReactDOM.render(
  <React.StrictMode>
    <GeoLocationProvider>
      <App />
    </GeoLocationProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
