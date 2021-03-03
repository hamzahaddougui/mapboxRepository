// import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../services/api";

const CACHE_DELAY = 10;
const url = "/filter/json";

const slice = createSlice({
  name: "matcher",

  initialState: {
    filters: [
      {
        group: "TERRITORY",
        category: "Settlement",
        name: "Town",
        level: "city level",
        radiusMiles: "",
        description: "Town <10k ppl",
      },
      {
        group: "TERRITORY",
        category: "Settlement",
        name: "Large town",
        level: "city level",
        radiusMiles: "",
        description: "Large town 10k-100k ppl",
      },
      {
        group: "TERRITORY",
        category: "Settlement",
        name: "City",
        level: "city level",
        radiusMiles: "",
        description: "City 100k-1M ppl",
      },
      {
        group: "TERRITORY",
        category: "Settlement",
        name: "Metropolis",
        level: "city level",
        radiusMiles: "",
        description: "Metropolis 1M-10M ppl",
      },
      {
        group: "TERRITORY",
        category: "Location",
        name: "Downtown",
        level: "Neighborhood level",
        radiusMiles: "",
        description: "",
      },
    ],
    currentStep: "filter_explore",
    filterStep: "filter_explore",
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    filtersRequested: (state, action) => {
      console.log("filterRequested");
      state.loading = true;
    },
    filtersRequestFailed: (state, action) => {
      state.loading = false;
    },
    filtersReceived: (state, action) => {
      state.filters = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    changeValue: (state, action) => {
      state.form[action.payload.name] = action.payload.value;
    },
    checkValue: (state, action) => {
      console.log("Hey");
      const { value, formName } = action.payload;
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      const form = currentStep.forms.filter(f => f.name === formName)[0];
      const checkedValues = form.data;
      if (checkedValues.includes(value)) {
        const index = checkedValues.indexOf(value);
        if (index > -1) {
          checkedValues.splice(index, 1);
        }
      } else checkedValues.push(value);
    },
    checkFilterValue: (state, action) => {
      const currentStep = state.list.filter(s => s.name === state.filterStep)[0];
      const checkedValues = currentStep.data.checkedValues;
      if (checkedValues.includes(action.payload)) {
        const index = checkedValues.indexOf(action.payload);
        if (index > -1) {
          checkedValues.splice(index, 1);
        }
      } else checkedValues.push(action.payload);
    },
    changeStep: (state, action) => {
      state.currentStep = action.payload.to;
    },
    changeSelectValue: (state, action) => {
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      currentStep.data = action.payload.option;
    },
    changeRange: (state, action) => {
      const { value, formName } = action.payload;
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      const form = currentStep.forms.filter(f => f.name === formName)[0];
      form.data = value;
    },
    chooseValue: (state, action) => {
      const { value, formName } = action.payload;
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      const form = currentStep.forms.filter(f => f.name === formName)[0];
      form.data = value;
    },
    addNbValue: (state, action) => {
      const { formName } = action.payload;
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      const form = currentStep.forms.filter(f => f.name === formName)[0];
      form.data.value += 1;
    },
    removeNbValue: (state, action) => {
      const { formName } = action.payload;
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      const form = currentStep.forms.filter(f => f.name === formName)[0];
      form.data.value -= 1;
    },
    removeCurrentSelectedValue: (state, action) => {
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      currentStep.data = "";
    },
    validateStep: (state, action) => {
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      currentStep.valid = true;
    },
    invalidateStep: (state, action) => {
      const currentStep = state.list.filter(s => s.name === state.currentStep)[0];
      currentStep.valid = false;
    },
  },
});

export const {
  articleAdded,
  filtersRequested,
  filtersReceived,
  filtersRequestFailed,
  changeValue,
  checkValue,
  changeStep,
  changeSelectValue,
  removeCurrentSelectedValue,
  checkFilterValue,
  validateStep,
  invalidateStep,
  changeRange,
  addNbValue,
  removeNbValue,
  chooseValue,
} = slice.actions;

export default slice.reducer;

// Action Creators
export const loadFilters = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  console.log("loadFilter -----------");
  dispatch(
    apiCallBegan({
      url,
      // method: "get",
      onStart: filtersRequested.type,
      onSuccess: filtersReceived.type,
      onError: filtersRequestFailed.type,
    }),
  );
};

// export const loadMapData = () => (dispatch, getState) => {
//   if (isCached(getState().modules.article)) return;

//   dispatch(
//     apiCallBegan({
//       url,
//       onStart: articleRequested.type,
//       onSuccess: articleReceived.type,
//       onError: articleRequestFailed.type,
//     }),
//   );
// };

// const isCached = entity => {
//   const { lastFetch } = entity;
//   const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
//   return diffInMinutes < CACHE_DELAY;
// };
