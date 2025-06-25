
import { createSlice } from '@reduxjs/toolkit';


export const countersSlise = createSlice({

    name: 'counters',

    initialState: {

        currentCounterType: 'day', //  day hour
        currentCounterCategoryId: null,
        counterList: [],
       



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

        
        
    },

})

export const {  
    setCurrentCounterType,
    setCurrentCounterCategoryId,
    setCounterList,
   
   

} = countersSlise.actions;

export const selectorData = ( state ) => {
    return {
        currentCounterType:         state.counters.currentCounterType,
        currentCounterCategoryId:   state.counters.currentCounterCategoryId,
        counterList:                state.counters.counterList,




        


    };
};

export default countersSlise.reducer;






