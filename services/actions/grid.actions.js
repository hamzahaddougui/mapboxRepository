import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

import Router from "next/router";
import Link from "next/link";

const url = "/matcher/run";

const slice = createSlice({
  name: "grid",
  initialState: {
    neighborhoods: [
      // {City: "Royal Palm Beach", Neighborhood: "Estates of Royal Palm Beach", Score: 100, id: "6065eceb533fdd40f08c5563"},
      // {City: "Royal Palm Beach", Neighborhood: "Crestwood", Score: 100, id: "6065eceb533fdd40f08c5562"},
      // {City: "Royal Palm Beach", Neighborhood: "Courtyard of the Groves", Score: 100, id: "6065eceb533fdd40f08c5561"},
      // {City: "Royal Palm Beach", Neighborhood: "Counterpoint Estates", Score: 100, id: "6065eceb533fdd40f08c5560"},
      // {City: "Royal Palm Beach", Neighborhood: "Business Parkway", Score: 100, id: "6065eceb533fdd40f08c555f"},
      // {City: "Royal Palm Beach", Neighborhood: "Bellasera", Score: 100, id: "6065eceb533fdd40f08c555e"},
      // {City: "Royal Palm Beach", Neighborhood: "Bella Terra", Score: 100, id: "6065eceb533fdd40f08c555d"}
    ],
    chunk: [],
    page: 0,
    loading: false,
    lastFetch: null,
  },
  reducers: {
    neighborhoodsRequested: (state, action) => {
      state.loading = true;
    },
    neighborhoodsRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    neighborhoodsReceived: (state, action) => {
     
        state.neighborhoods = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    getChunk: (state, action) => {
        console.log("Getting Chunk");
        // state.page = state.page + 1;
        state.chunk = state.chunk.concat((_.chunk(state.neighborhoods, 50))[state.page]);
        state.page = state.page + 1;
    },
    clearChunk: (state, action) => {
        console.log("Clearing Chunk");
        state.chunk = _.chunk(state.neighborhoods, 50)[0];
        state.page = 1;
        // state.chunk = _.chunk(state.neighborhoods, 50)[state.page];
    }
  },
});

export const {
  neighborhoodsRequested,
  neighborhoodsRequestFailed,
  neighborhoodsReceived,
  getChunk,
  clearChunk
} = slice.actions;

export default slice.reducer;

export const loadMatched = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  console.log("loading Neighborhoods ...");

  const data = getState().modules.neighborhood.matched.data;
  dispatch(neighborhoodsReceived(data));
//   dispatch(
//     apiCallBegan({
//       onStart: neighborhoodsRequested.type,
//       onSuccess: neighborhoodsReceived.type,
//       onError: neighborhoodsRequestFailed.type,
//       data
//     }),
//   );
};
