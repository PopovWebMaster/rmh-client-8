import { createSlice } from '@reduxjs/toolkit';

export const spinnerSlice = createSlice({

    name: 'spinner',

    initialState: {
        isActive: false,


    },

    reducers: {

        setSpinnerIsActive: ( state, action ) => {
            state.isActive =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setSpinnerIsActive,
   

} = spinnerSlice.actions;

export const selectorData = ( state ) => {
    return {
        isActive: state.spinner.isActive,


    };
};

export default spinnerSlice.reducer;






