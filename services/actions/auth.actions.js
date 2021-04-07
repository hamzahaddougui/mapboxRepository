import { SmsFailed } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import { map } from "lodash";
import { apiCallBegan } from "../api";

const url = "/users/signin";

const slice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    lastFetch: null,
  },
  reducers: {
    signinGoogleRequested: (state, action) => {
      console.log("Login requested");
      state.loading = true;
    },
    signinGoogleRequestFailed: (state, action) => {
      console.log("Login failed");
      state.loading = false;
    },
    signinGoogleReceived: (state, action) => {
      console.log("login received");
      // state.filters = action.payload;
      state.loading = false;
      // state.lastFetch = Date.now();
    },
  },
});

export const {
  signinGoogleRequested,
  signinGoogleRequestFailed,
  signinGoogleReceived,
} = slice.actions;

export default slice.reducer;

export const signinGoogle = () => (dispatch, getState) => {
  console.log("load Filters ...");
  dispatch(
    apiCallBegan({
      url: `${url}/google`,
      onStart: signinGoogleRequested.type,
      onSuccess: signinGoogleRequestFailed.type,
      onError: signinGoogleReceived.type,
    }),
  );
};
