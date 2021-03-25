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

export const { addFavorite, resetNeighborhood } = slice.actions;

export default slice.reducer;
