import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";


const slice = createSlice({
  name: "homeMatcher",

  initialState: {
    selectedCategory: null,
    openSideBar: false
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    handleOpenSideBar: (state, action) => {
        state.openSideBar = !state.openSideBar;
    },
  },
});

export const {
    setSelectedCategory,
    handleOpenSideBar,
} = slice.actions;

export default slice.reducer;
