import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../services/api";

const url = "/matcher/run";

const slice = createSlice({
  name: "neighborhoodResult",

  initialState: {
    matched: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    neighborhoodRequested: (state, action) => {
      state.loading = true;
    },
    neighborhoodRequestFailed: (state, action) => {
      state.loading = false;
    },
    neighborhoodReceived: (state, action) => {
      state.matched = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
      console.log(state.matched);
    },
  },
});

export const {
  neighborhoodRequested,
  neighborhoodRequestFailed,
  neighborhoodReceived,
} = slice.actions;

export default slice.reducer;

export const loadMatched = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  console.log("load Filters ...");
  const data = {};

  data.filters = getState().modules.filter.priorities;

  console.log(data);

  dispatch(
    apiCallBegan({
      url,
      onStart: neighborhoodRequested.type,
      onSuccess: neighborhoodReceived.type,
      onError: neighborhoodRequestFailed.type,
      data,
      method: "POST",
    }),
  );
};
