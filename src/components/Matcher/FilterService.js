import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from "../../services/api";

const url = "/filter/json";

const slice = createSlice({

    name: 'filters',

    initialState: {
        filters: [],
        loading: false,
        checkedValues: [],
        priorities: [],
        lastFetch: null
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
        prioritiesRequested: (state, action) => {
            state.loading = true;
        },
        prioritiesRequestFailed: (state, action) => {
            state.loading = false;
        },
        prioritiesReceived: (state, action) => {
            const value = action.payload;
            //state.priorities.push(value);
            if (state.priorities.includes(value)) {
                const index = state.priorities.indexOf(value);
                if (index > -1) {
                  state.priorities.splice(index, 1);
                }
            } else state.priorities.push(value);
            state.loading = false;
        },
        checkValueAction: (state, action) => {
            //console.log("Checked Value");
            const value = action.payload;
            //console.log(value);
            if (state.checkedValues.includes(value)) {
                const index = state.checkedValues.indexOf(value);
                if (index > -1) {
                  state.checkedValues.splice(index, 1);
                }
            } else state.checkedValues.push(value);
        },
        checkPriorityMustHave: (state, action) => {
            const value = action.payload;
            state.priorities.map((element) => {(element.name == value ? element.priority.mustHave = (!element.priority.mustHave) : element.priority.mustHave)});
        },
        checkPriorityNiceToHave: (state, action) => {
            const value = action.payload;
            state.priorities.map((element) => {(element.name == value ? element.priority.niceToHave = (!element.priority.niceToHave) : element.priority.niceToHave)});
        }
    }

});

export const {
    filtersRequested,
    filtersRequestFailed,
    filtersReceived,
    prioritiesRequested,
    prioritiesRequestFailed,
    prioritiesReceived,
    checkValueAction,
    checkPriorityMustHave,
    checkPriorityNiceToHave
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


export const loadPriorities = () => {
    return async (dispatch, getState) => {
      dispatch(prioritiesRequested())
  
      try {
        console.log("loading priorities ...");
            const data = getState().modules.filter.checkedValues;

            data.map((element) =>{
                var priority = {
                        "name": element,
                        "priority": {
                            "mustHave": false,
                            "niceToHave": false
                        }
                }

                dispatch(prioritiesReceived(priority));

            });

            // for (var i=0; i<data.length; i++){
            //     console.log(data[i]);
            //     // var element = {
            //     //     "name": data[i],
            //     //     "priority": {
            //     //         "mustHave": false,
            //     //         "niceToHave": false
            //     //     }
            //     // }
            // }

            //dispatch(prioritiesReceived(data))
      } catch (error) {
        dispatch(prioritiesRequestFailed());
        console.log(error);
      }
    }
}


//   export const loadPriorities = () => (dispatch, getState) => {
//     // if (isCached(getState().modules.filters)) return;

//     async dispatch => {
//               dispatch(prioritiesRequested())
//               try {
//                 console.log("loading priorities ...");
//                 const checkedValues = getState().modules.filter.checkedValues;
          
//                 dispatch(prioritiesReceived(checkedValues))
//               } catch (error) {
//                 dispatch(filtersRequestFailed())
//               }
//     }

    // dispatch(
    //     apiCallBegan({
    //       filters,
    //       onStart: prioritiesRequested.type,
    //       onSuccess: prioritiesReceived.type,
    //       onError: prioritiesRequestFailed.type,
    //     }),
    // );

  //};
