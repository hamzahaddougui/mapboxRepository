import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

import Router from "next/router";
import Link from "next/link";

const url = "/matcher/run";

const slice = createSlice({
  name: "grid",
  initialState: {
    neighborhoods: [],
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
        state.page = 0;
        state.chunk = _.chunk(state.neighborhoods, 50)[state.page];
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
