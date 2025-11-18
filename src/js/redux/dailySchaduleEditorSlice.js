
import { createSlice } from '@reduxjs/toolkit';

import { get_all_data_from_evants_list } from './vendors/dailySchaduleEditor/get_all_data_from_evants_list.js';

export const dailySchaduleEditorSlice = createSlice({

    name: 'dailySchaduleEditor',

    initialState: {

        dailyEditorIsChanged: false,

        dailyEvents: [],
        dailyEventsById: {},
        dailySectors: [],





    },

    reducers: {

        setDailiEditorIsChanged: ( state, action ) => {
            state.dailyEditorIsChanged =  action.payload;
        },
       
        setDailyEventsList: ( state, action ) => {
            state.dailyEvents =  action.payload;
        },


        
    },

})

export const {  
    setDailiEditorIsChanged,
    setDailyEventsList,


} = dailySchaduleEditorSlice.actions;

export const selectorData = ( state ) => {
    return {
        dailyEditorIsChanged: state.dailySchaduleEditor.dailyEditorIsChanged,
        dailyEvents: state.dailySchaduleEditor.dailyEvents,
        dailyEventsById: state.dailySchaduleEditor.dailyEventsById,
        dailySectors: state.dailySchaduleEditor.dailySectors,



    };
};

export default dailySchaduleEditorSlice.reducer;






