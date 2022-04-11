import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(root)
ReactRoot.render(<React.StrictMode><App /></React.StrictMode>)
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));
reportWebVitals();