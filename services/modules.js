import { combineReducers } from "redux";
import FilterReducer from "./actions/filter.actions";
import NeighborhoodReducer from "./actions/neighborhood.actions";
import AuthenticationReducer from "./actions/signup.actions";
import MapReducer from "./actions/map.actions";

export default combineReducers({
  filter: FilterReducer,
  neighborhood: NeighborhoodReducer,
  authentication: AuthenticationReducer,
  map: MapReducer,
});
