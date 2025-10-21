

import { createSlice } from '@reduxjs/toolkit';


export const airFilesSlice = createSlice({

    name: 'airFiles',

    initialState: {
        filePrefixList: [],
    },

    reducers: {

        setFilePrefixList: ( state, action ) => {
            state.filePrefixList = action.payload;
        },


   
    },

})

export const {  
    setFilePrefixList,

} = airFilesSlice.actions;

export const selectorData = ( state ) => {

    return {
        filePrefixList:    state.airFiles.filePrefixList,
        



    };
};

export default airFilesSlice.reducer;






