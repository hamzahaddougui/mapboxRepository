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
  },
  reducers: {
    neighborhoodRequested: (state, action) => {
      state.loading = true;
    },
    neighborhoodRequestFailed: (state, action) => {
      state.loading = false;
    },
    neighborhoodReceived: (state, action) => {
      if (typeof action.payload === String) {
        // console.log(action.payload.replace(/\bNaN\b/g, ""))
        state.matched = JSON.parse(action.payload.replace(/\bNaN\b/g, '""'));
      } else {
        // console.log(action.payload)
        state.matched = action.payload;
      }
      console.log(`${state.matched.data.length} Neighborhoods receiver`);

      state.loading = false;
      state.lastFetch = Date.now();
      console.log("heeeeeeeeeeeeey");
      // Router.push("/neighborhood");
      //<Link href="/"></Link>
      // console.log(state.matched);
    },
    addFavorite: (state, action) => {
      console.log("Favorite added!!");
      const value = action.payload;
      console.log(value);

      let index = -1;
      state.favorites.forEach((element, i) => {
        if (JSON.stringify(element) === JSON.stringify(value)) index = i;
      });

      if (index > -1) {
        state.favorites.splice(index, 1);
        index = -1;
      } else state.favorites.push(value);

      // THIS ONE BELOW IS WORKING WITH ELEMENTS

      // if (state.favorites.includes(value)) {
      //   console.log('Value exists already!');
      //   const index = state.favorites.indexOf(value);
      //   if (index > -1) {
      //     state.favorites.splice(index, 1);
      //   }
      // } else {state.favorites.push(value)}
    },
    resetNeighborhood: (state, action) => {
      console.log("Restarting Neighborhood results...");
      state.matched = [];
      state.favorites = [];
    },
  },
});

export const {
  neighborhoodRequested,
  neighborhoodRequestFailed,
  neighborhoodReceived,
  addFavorite,
  resetNeighborhood,
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
