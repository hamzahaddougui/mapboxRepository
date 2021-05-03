import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

import Router from "next/router";
import Link from "next/link";

const url = "/matcher/run";

const slice = createSlice({
  name: "nbResult",
  initialState: {
    currentNb: null,
    detailNb: null,
    current: {},
    matched: [],
    favorites: [],
    flipped: {},
    loading: false,
    lastFetch: null,
    error: null,
    NbList: []
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
      // console.log(state.matched && `${state.matched.data?.length} Neighborhoods receiver`);

      state.loading = false;
      state.lastFetch = Date.now();
      Router.push("/matcher");
    },
    detailRequested: (state, action) => {
      state.loading = true;
    },
    detailRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    detailReceived: (state, action) => {
      state.detailNb = action.payload;
      state.loading = false;
    },
    addFavorite: (state, action) => {
      // console.log("Favorite added!!");
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
        state.matched.data?.forEach((element, i) => {
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
    flipCard: (state, action) => {
      // console.log("Flipping Card!!");
      // const value = action.payload;
      // // console.log(value);

      // let index = -1;
      // state.flipped.forEach((element, i) => {
      //   if (JSON.stringify(element) === JSON.stringify(value)) index = i;
      // });

      // if (index > -1) {
      //   state.flipped.splice(index, 1);
      //   // state.matched.data.push(value);
      //   index = -1;
      // } else {
      //   // let matchIndex = -1;
      //   // state.matched.data?.forEach((element, i) => {
      //   //   if (JSON.stringify(element) === JSON.stringify(value)) matchIndex = i;
      //   // });
      //   // state.matched.data.splice(matchIndex, 1);
      //   state.flipped.push(value);
      //   index = -1;
      //   // matchIndex = -1;
      // }

      // console.log("Flipping Card!!");
      const value = action.payload;

      // console.log("value", value);
      // console.log("state", state.flipped);
      if(JSON.stringify(state.flipped) === JSON.stringify(value)){
        state.flipped = {};
      }else{
        state.flipped = value;
      }
    },
    setCurrentNB: (state, action) => {
      console.log('Setting Curent: ', action.payload);
      state.currentNb = action.payload;
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
    NeighborhoodOnMove: (state, action) => {
      let value= action.payload;
      state.NbList= JSON.parse(JSON.stringify(value));
      // console.log(state.NbList)

      
    }
  },
});

export const {
  neighborhoodRequested,
  neighborhoodRequestFailed,
  neighborhoodReceived,
  detailRequested,
  detailRequestFailed,
  detailReceived,
  addFavorite,
  flipCard,
  setCurrentNB,
  showCurrent,
  resetNeighborhood,
  resetErrors,
  NeighborhoodOnMove
} = slice.actions;

export default slice.reducer;

export const loadMatched = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  // console.log("load Filters ...");
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

export const detailNeighborhood = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  // console.log("Getting Neighborhood ...");
  
  const data = getState().modules.neighborhood.currentNb;
  data && (console.log("Id : ", data.id));
  // let id;
  // data.detailsId ? id = data.detailsId : id = data.id;
  
  data && (
  dispatch(
    apiCallBegan({
      url : `/nbdata/${data.id}`,
      onStart: detailRequested.type,
      onSuccess: detailReceived.type,
      onError: detailRequestFailed.type,
      method: "GET",
    }),
  ));
  
};


