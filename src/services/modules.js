import { combineReducers } from "redux";
import MatcherReducer from "../components/Matcher/MatcherService";

export default combineReducers({
  matcher: MatcherReducer,
});