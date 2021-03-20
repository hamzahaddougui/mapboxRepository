import axios from "axios";
import * as actions from "../api";

const BASE_URL = "http://www.nomadville.xyz/api";
// const BASE_URL = "http://localhost:3001/api";

const api_ = store => next => async action => {
  // console.log(store.getState());
  next(action);
};

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError, baseURL = BASE_URL } = action.payload;
  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      // baseURL: "http://www.nomadville.xyz/api",
      baseURL,
      url,
      method,
      data,
    });
    // General
    dispatch(actions.apiCallSuccess(response.data));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
