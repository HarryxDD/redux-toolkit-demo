// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filtersReducer = (state = initState, action) => {

//     switch(action.type) {

//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }

//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }

//         case 'filters/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload
//             }

//         default:
//             return state;
//     }
// }

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // redux helps to write mutation code || IMMER
            state.search = action.payload;
        }, // => { type: 'filter/searchFilterChange' }
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload
        }
    }
})