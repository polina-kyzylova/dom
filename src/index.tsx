import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./global";
import App from "./App";
import { store } from "./core/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <GlobalStyles />
    </React.StrictMode>
  </Provider>
);
