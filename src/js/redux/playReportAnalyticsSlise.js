
import { createSlice } from '@reduxjs/toolkit';

export const playReportAnalyticsSlise = createSlice({

    name: 'playReportAnalytics',

    initialState: {
        analitycsIsActive: false,


    },

    reducers: {

        setAnalitycsIsActive: ( state, action ) => {
            state.analitycsIsActive =  action.payload;
        },


    },

})

export const {  
    setAnalitycsIsActive,



} = playReportAnalyticsSlise.actions;

export const selectorData = ( state ) => {
    return {
        analitycsIsActive: state.playReportAnalytics.analitycsIsActive,


    };
};

export default playReportAnalyticsSlise.reducer;






