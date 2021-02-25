import { combineReducers } from "redux";
import filterReducer from "../components/Matcher/filtreService";

export default combineReducers({
  filter: filterReducer,
});