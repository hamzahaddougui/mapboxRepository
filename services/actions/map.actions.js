import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "map",

  initialState: {
    loading: false,
    lastFetch: null,
    map: null,
  },
  reducers: {
    loadStarted: (state, action) => {
      state.loading = true;
    },
    LoadEnded: (state, action) => {
      state.loading = false;
      state.map = action.payload;
    },
  },
});

export const { loadStarted, LoadEnded } = slice.actions;

export default slice.reducer;
