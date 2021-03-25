import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../services/api";

import Router from "next/router";
import Link from "next/link";

const url = "/matcher/run";

const slice = createSlice({
  name: "neighborhoodResult",

  initialState: {
    matched: [],
    favorites: [],
    loading: false,
    lastFetch: null,
    error: null,
  },
  reducers: {
    neighborhoodRequested: (state, action) => {
      state.loading = true;
    },
    neighborhoodRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    neighborhoodReceived: (state, action) => {
      if (typeof action.payload === String) {
        state.matched = JSON.parse(action.payload.replace(/\bNaN\b/g, '""'));
      } else {
        state.matched = action.payload;
      }
      console.log(state.matched && `${state.matched.data?.length} Neighborhoods receiver`);

      state.loading = false;
      state.lastFetch = Date.now();
      Router.push("/matcher");
    },
    resetNeighborhood: (state, action) => {
      console.log("Restarting Neighborhood results...");
      state.matched = [];
    },
    resetErrors: (state, action) => {
      state.error = null;
    },
  },
});

export const {
  neighborhoodRequested,
  neighborhoodRequestFailed,
  neighborhoodReceived,
  addFavorite,
  resetNeighborhood,
  resetErrors,
} = slice.actions;

export default slice.reducer;

export const loadMatched = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  console.log("load Filters ...");
  const data = {};

  data.filters = getState().modules.filter.priorities;

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
