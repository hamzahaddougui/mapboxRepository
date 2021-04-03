import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

import Router from "next/router";
import Link from "next/link";

const url = "/matcher/run";

const slice = createSlice({
  name: "nbResult",
  initialState: {
    current: {},
    // matched: {data: [
    //   {City: "Royal Palm Beach", Neighborhood: "Estates of Royal Palm Beach", Score: 100, id: "6065eceb533fdd40f08c5563"},
    //   {City: "Royal Palm Beach", Neighborhood: "Crestwood", Score: 100, id: "6065eceb533fdd40f08c5562"},
    //   {City: "Royal Palm Beach", Neighborhood: "Courtyard of the Groves", Score: 100, id: "6065eceb533fdd40f08c5561"},
    //   {City: "Royal Palm Beach", Neighborhood: "Counterpoint Estates", Score: 100, id: "6065eceb533fdd40f08c5560"},
    //   {City: "Royal Palm Beach", Neighborhood: "Business Parkway", Score: 100, id: "6065eceb533fdd40f08c555f"},
    //   {City: "Royal Palm Beach", Neighborhood: "Bellasera", Score: 100, id: "6065eceb533fdd40f08c555e"},
    //   {City: "Royal Palm Beach", Neighborhood: "Bella Terra", Score: 100, id: "6065eceb533fdd40f08c555d"}

    // ]},
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
    addFavorite: (state, action) => {
      console.log("Favorite added!!");
      const value = action.payload;
      // console.log(value);

      let index = -1;
      state.favorites.forEach((element, i) => {
        if (JSON.stringify(element) === JSON.stringify(value)) index = i;
      });

      if (index > -1) {
        state.favorites.splice(index, 1);
        // state.matched.data.push(value);
        index = -1;
      } else {
        let matchIndex = -1;
        state.matched.data.forEach((element, i) => {
          if (JSON.stringify(element) === JSON.stringify(value)) matchIndex = i;
        });
        // state.matched.data.splice(matchIndex, 1);
        state.favorites.push(value);
        matchIndex = -1;
      }

      // THIS ONE BELOW IS WORKING WITH ELEMENTS

      // if (state.favorites.includes(value)) {
      //   console.log('Value exists already!');
      //   const index = state.favorites.indexOf(value);
      //   if (index > -1) {
      //     state.favorites.splice(index, 1);
      //   }
      // } else {state.favorites.push(value)}
    },
    showCurrent: (state, action) => {
      state.current= action.payload
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
  showCurrent,
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
