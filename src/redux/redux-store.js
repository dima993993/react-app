import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
