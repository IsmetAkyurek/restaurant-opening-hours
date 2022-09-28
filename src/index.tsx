import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { initSentry, initGTM } from "Core/utils";

initSentry();
initGTM();

const container = document.getElementById("root") || document.createElement("div");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
