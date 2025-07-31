
import { createSlice } from '@reduxjs/toolkit';


export const countersSlise = createSlice({

    name: 'counters',

    initialState: {

        currentCounterType: 'day', //  day hour
        currentCounterCategoryId: null,
        counterList: [],
        counterListHours: [],

       



    },

    reducers: {



        setCurrentCounterType: ( state, action ) => {
            state.currentCounterType =  action.payload;
        },

        setCurrentCounterCategoryId: ( state, action ) => {
            state.currentCounterCategoryId =  action.payload;
        },
        setCounterList: ( state, action ) => {
            state.counterList =  action.payload;
        },  

        setCounterListHours: ( state, action ) => {
            state.counterListHours =  action.payload;
        }, 
        
    },

})

export const {  
    setCurrentCounterType,
    setCurrentCounterCategoryId,
    setCounterList,
    setCounterListHours,
   
   

} = countersSlise.actions;

export const selectorData = ( state ) => {
    return {
        currentCounterType:         state.counters.currentCounterType,
        currentCounterCategoryId:   state.counters.currentCounterCategoryId,
        counterList:                state.counters.counterList,
        counterListHours:           state.counters.counterListHours,





        


    };
};

export default countersSlise.reducer;






