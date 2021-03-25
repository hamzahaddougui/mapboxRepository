import { combineReducers } from "redux";
import FilterReducer from "../components/Filter/FilterService";
import NeighborhoodReducer from "../components/Neighborhood/NbService";
import AuthenticationReducer from "../components/SignUp/SignUpService";
import MapReducer from "../components/Map/MapService";

export default combineReducers({
  filter: FilterReducer,
  neighborhood: NeighborhoodReducer,
  authentication: AuthenticationReducer,
  map: MapReducer,
});
