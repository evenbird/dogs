import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// const initialState = {
//     dogs:'SHOW_ALL_BLOG',
//     blogs:data.data,
//   }

export default function configureStore() {
  return createStore(
    rootReducer,
    // initialState,
    applyMiddleware(thunk)
  );
}
