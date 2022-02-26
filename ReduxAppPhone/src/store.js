import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "../src/state/reducers/rootReducer";

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;