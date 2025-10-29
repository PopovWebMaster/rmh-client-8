
import { createSlice } from '@reduxjs/toolkit';

export const playReportAnalyticsSlise = createSlice({

    name: 'playReportAnalytics',

    initialState: {
        analitycsIsActive: false,

        evenstTree: {},


    },

    reducers: {

        setAnalitycsIsActive: ( state, action ) => {
            state.analitycsIsActive =  action.payload;
        },

        setEvenstTree: ( state, action ) => {
            state.evenstTree =  action.payload;
        },


    },

})

export const {  
    setAnalitycsIsActive,
    setEvenstTree,



} = playReportAnalyticsSlise.actions;

export const selectorData = ( state ) => {
    return {
        analitycsIsActive: state.playReportAnalytics.analitycsIsActive,
        evenstTree: state.playReportAnalytics.evenstTree,


        


    };
};

export default playReportAnalyticsSlise.reducer;






