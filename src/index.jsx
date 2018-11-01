import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

const store = configureStore();
const fetchDataForLocation = () => {
  store.dispatch({ type: "REQUEST_FETCH_QUESTIONS" });
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

fetchDataForLocation();
