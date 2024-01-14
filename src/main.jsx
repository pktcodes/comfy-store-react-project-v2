import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import { store } from "./store.js";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </React.StrictMode>,
);
