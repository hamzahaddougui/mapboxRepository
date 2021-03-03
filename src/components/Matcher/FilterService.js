import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from "../../services/api";

const url = "/filter/json";

const slice = createSlice({

    name: 'filters',

    initialState: {
        filters: [],
        loading: false,
        lastFetch: null
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
    }

});

export const {
    filtersRequested,
    filtersRequestFailed,
    filtersReceived
} = slice.actions;

export default slice.reducer;

//Actions

// export function loadFilters() {
//     return async dispatch => {
//         console.log("Fetching Filters ...")
//       dispatch(filtersRequested())
  
//       try {
//         const data = await axios.get('http://www.nomadville.xyz/api/filter/json')
//         //const data = await response.json()
  
//         dispatch(filtersReceived(data))
//       } catch (error) {
//         dispatch(filtersRequestFailed())
//       }
//     }
// }

export const loadFilters = () => (dispatch, getState) => {
    // if (isCached(getState().modules.filters)) return;
    console.log("load Filters ...");
    dispatch(
      apiCallBegan({
        url,
        onStart: filtersRequested.type,
        onSuccess: filtersReceived.type,
        onError: filtersRequestFailed.type,
      }),
    );
  };

