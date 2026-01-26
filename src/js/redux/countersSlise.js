
import { createSlice } from '@reduxjs/toolkit';


export const countersSlise = createSlice({

    name: 'counters',

    initialState: {

        currentCounterType: 'day', //  day hour
        currentCounterCategoryId: null,
        counterList: [],
        counterListHours: [],
        counterListFiles: {},


       



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

        setCounterListFiles: ( state, action ) => {
            state.counterListFiles =  action.payload;
        }, 



        
        
    },

})

export const {  
    setCurrentCounterType,
    setCurrentCounterCategoryId,
    setCounterList,
    setCounterListHours,
    setCounterListFiles,
   
   

} = countersSlise.actions;

export const selectorData = ( state ) => {
    return {
        currentCounterType:         state.counters.currentCounterType,
        currentCounterCategoryId:   state.counters.currentCounterCategoryId,
        counterList:                state.counters.counterList,
        counterListHours:           state.counters.counterListHours,
        counterListFiles:           state.counters.counterListFiles,


        





        


    };
};

export default countersSlise.reducer;






