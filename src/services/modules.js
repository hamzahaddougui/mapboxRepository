import { combineReducers } from "redux";
import MatcherReducer from "../components/Matcher/MatcherService";
import FilterReducer from "../components/Matcher/FilterService";
import NeighborhoodReducer from "../components/Matcher/NeighborhoodService";
import AuthenticationReducer from "../components/SignUp/SignUpService";

export default combineReducers({
  matcher: MatcherReducer,
  filter: FilterReducer,
  neighborhood: NeighborhoodReducer,
  authentication: AuthenticationReducer,
});