import { createSlice } from "@reduxjs/toolkit";
import { map } from "lodash";
import { apiCallBegan } from "../api";

const url = "/filter/json";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: [],
    loading: false,
    checkedValues: [],
    priorities: [],
    filtersData: [],
    filtersDataLoading: false,
    selectedFilter: null,
    lastFetch: null,
  },
  reducers: {
    filtersRequested: (state, action) => {
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
    prioritiesEmpty: (state, action) => {
      state.priorities = [];
    },
    prioritiesRequested: (state, action) => {
      state.loading = true;
    },
    prioritiesRequestFailed: (state, action) => {
      state.loading = false;
    },
    prioritiesReceived: (state, action) => {
      const { priority, currentPriorities } = action.payload;
      let c = 0;
      let currentPrioritie;
      currentPriorities.map(element => {
        if (element.name === priority.name) {
          currentPrioritie = element;
          c = 1;
        }
      });
      if (c == 0) state.priorities.push(priority);
      else state.priorities.push(currentPrioritie);
      state.loading = false;
    },
    checkValueAction: (state, action) => {
      const value = action.payload;
      if (state.checkedValues.includes(value)) {
        const index = state.checkedValues.indexOf(value);
        if (index > -1) {
          state.checkedValues.splice(index, 1);
        }
      } else state.checkedValues.push(value);
    },
    checkPriority: (state, action) => {
      const option = action.payload;
      state.priorities.map(element => {
        if(element.name == option.value) {
          const pr = option.id;
          if(pr === "mustHave"){
              if(element.priority.niceToHave) element.priority.niceToHave = false;
              element.priority.mustHave = !element.priority.mustHave;
          } else if(pr === "niceToHave"){
            if(element.priority.mustHave) element.priority.mustHave = false;
              element.priority.niceToHave = !element.priority.niceToHave;
          }

        }
      });
    },
    // checkPriorityMustHave: (state, action) => {
    //   const value = action.payload;
    //   state.priorities.map(element => {
    //     element.name == value
    //       ? (element.priority.mustHave = !element.priority.mustHave)
    //       : element.priority.mustHave;
    //   });
    // },
    // checkPriorityNiceToHave: (state, action) => {
    //   const value = action.payload;
    //   state.priorities.map(element => {
    //     element.name == value
    //       ? (element.priority.niceToHave = !element.priority.niceToHave)
    //       : element.priority.niceToHave;
    //   });
    // },
    resetFilter: (state, action) => {
      // console.log("Restarting Filters...");
      state.filters = [];
      state.checkedValues = [];
      state.priorities = [];
    },
    selectFilter: (state, action) => {
      if(JSON.stringify(state.selectedFilter) === JSON.stringify(action.payload)){
        state.selectedFilter = null;
      }else{
        state.selectedFilter = action.payload;
      }
    },
    filtersDataRequested: (state, action) => {
      // console.log("Filters Data Requested ...");
      state.filtersDataLoading = true;
    },
    filtersDataRequestFailed: (state, action) => {
      // console.log("Filters Data Request Failed.");
      state.filtersDataLoading = false;
      state.error = action.payload;
    },
    filtersDataReceived: (state, action) => {
      // console.log("Filters Data Received !");
      if (typeof action.payload === String) {
        state.filtersData = JSON.parse(action.payload);
      } else {
        state.filtersData = action.payload;
      }

      state.filtersDataLoading = false;
    },
  },
});

export const {
  filtersRequested,
  filtersRequestFailed,
  filtersReceived,
  prioritiesEmpty,
  prioritiesRequested,
  prioritiesRequestFailed,
  prioritiesReceived,
  checkValueAction,
  checkPriority,
  resetFilter,
  selectFilter,
  filtersDataRequested,
  filtersDataRequestFailed,
  filtersDataReceived,
} = slice.actions;

export default slice.reducer;

//Actions

export const loadFilters = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  // console.log("load Filters ...");
  dispatch(
    apiCallBegan({
      url,
      onStart: filtersRequested.type,
      onSuccess: filtersReceived.type,
      onError: filtersRequestFailed.type,
    }),
  );
};

export const loadPriorities = () => {
  return async (dispatch, getState) => {
    dispatch(prioritiesRequested());
    try {
      // console.log("loading priorities ...");
      const currentPriorities = getState().modules.filter.priorities;
      dispatch(prioritiesEmpty());
      const data = getState().modules.filter.checkedValues;
      data.map(element => {
        const priority = {
          name: element,
          priority: {
            mustHave: false,
            niceToHave: false,
          },
        };
        dispatch(prioritiesReceived({ priority, currentPriorities }));
      });
    } catch (error) {
      dispatch(prioritiesRequestFailed());
      console.log(error);
    }
  };
};

export const loadFiltersData = () => (dispatch, getState) => {
  // if (isCached(getState().modules.filters)) return;
  // console.log("load Filters Data ...");

  dispatch(
    apiCallBegan({
      url: '/nbdata/static/all-filters-scores-from-db.json',
      onStart: filtersDataRequested.type,
      onSuccess: filtersDataReceived.type,
      onError: filtersDataRequestFailed.type,
      method: "GET",
    }),
  );
};
