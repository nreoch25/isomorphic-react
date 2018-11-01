import { createStore, combineReducers, applyMiddleware } from "redux";
import { identity } from "lodash";

const initialState = {
  test: "Test Value"
};

const configureStore = (state = initialState) => {
  const store = createStore(identity, state);
  return store;
};

export default configureStore;
