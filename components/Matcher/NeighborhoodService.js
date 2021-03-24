import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../services/api";

import Router from "next/router";
import Link from "next/link";

const url = "/matcher/run";

const slice = createSlice({
  name: "neighborhoodResult",

  initialState: {
    matched: [
      { Neighborhood: "Atlantic at San Pablo", Score: 18 },
      { Neighborhood: "Autumn Point", Score: 18 },
      { Neighborhood: "Avanti", Score: 18 },
      { Neighborhood: "Avenue Royale", Score: 18 },
      { Neighborhood: "Avenues", Score: 19 },
      { Neighborhood: "Avia St. Johns", Score: 19 },
      { Neighborhood: "Azalea Ridge", Score: 19 },
      { Neighborhood: "Bainbridge Town Center East", Score: 19 },
      { Neighborhood: "Bainebridge Estates", Score: 18 },
      { Neighborhood: "Banyan Bay", Score: 18 },
      { Neighborhood: "Bartram", Score: 18 },
      { Neighborhood: "Bay Harbour", Score: 18 },
      { Neighborhood: "Baymeadows", Score: 18 },
      { Neighborhood: "Beach / Walker", Score: 19 },
      { Neighborhood: "Beach Haven", Score: 18 },
      { Neighborhood: "Beach Way", Score: 19 },
      { Neighborhood: "Beachwood", Score: 19 },
      { Neighborhood: "Beatrice Walk", Score: 19 },
      { Neighborhood: "Beauclerc", Score: 18 },
      { Neighborhood: "Bent Creek", Score: 19 },
      { Neighborhood: "Benton", Score: 20 },
      { Neighborhood: "Bentwater", Score: 19 },
      { Neighborhood: "Big Island Swamp", Score: 18 },
      { Neighborhood: "Biltmore", Score: 18 },
      { Neighborhood: "Biscayne", Score: 19 },
      { Neighborhood: "Bishop Estates Road", Score: 20 },
      { Neighborhood: "Bishopswood", Score: 19 },
      { Neighborhood: "Black Hammock Island", Score: 19 },
      { Neighborhood: "Blackwood Cove Ballastone", Score: 19 },
      { Neighborhood: "Blackwood Forest", Score: 19 },
      { Neighborhood: "Blair Rd", Score: 19 },
      { Neighborhood: "Blanding Blvd", Score: 18 },
      { Neighborhood: "Blue Lake Estates", Score: 18 },
      { Neighborhood: "Boney Road", Score: 20 },
      { Neighborhood: "Brady Manor", Score: 18 },
      { Neighborhood: "Braywick East", Score: 20 },
      { Neighborhood: "Braywick Village", Score: 19 },
      { Neighborhood: "Brentwood Park", Score: 18 },
      { Neighborhood: "Bridgeview", Score: 18 },
      { Neighborhood: "Bridgewater", Score: 19 },
      { Neighborhood: "Brierwood", Score: 18 },
      { Neighborhood: "Bright Water", Score: 18 },
      { Neighborhood: "Brookhollow", Score: 19 },
      { Neighborhood: "Brooklyn", Score: 18 },
      { Neighborhood: "Brookview", Score: 18 },
      { Neighborhood: "Brown Island", Score: 18 },
      { Neighborhood: "Bulls Bay", Score: 18 },
      { Neighborhood: "Cabana", Score: 19 },
      { Neighborhood: "Camp Milton", Score: 19 },
      { Neighborhood: "Campfield", Score: 19 },
      { Neighborhood: "Candelwood", Score: 19 },
    ],
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
