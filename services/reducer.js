import { combineReducers } from "redux";

import modulesReducer from "./modules";

export default combineReducers({
  modules: modulesReducer,
});