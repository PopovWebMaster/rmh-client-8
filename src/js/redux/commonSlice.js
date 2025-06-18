commonSlice

import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({

    name: 'common',

    initialState: {

        currentPage: null,
        token: '',
        // companyAlias: null,
        // companyName: null,
        // companyType: null,
        // companyProgramSystem: null,
        // companyList: [],


    },

    reducers: {

        setCurrentPage: ( state, action ) => {
            state.currentPage =  action.payload;
        },

        setToken: ( state, action ) => {
            state.token =  action.payload;
        },

        

        // setCompanyAlias: ( state, action ) => {
        //     state.companyAlias =  action.payload;
        // },

        // setCompanyName: ( state, action ) => {
        //     state.companyName =  action.payload;
        // },

        // setCompanyType: ( state, action ) => {
        //     state.companyType =  action.payload;
        // },

        // setCompanyProgramSystem: ( state, action ) => {
        //     state.companyProgramSystem =  action.payload;
        // },

        // setCompanyList: ( state, action ) => {
        //     state.companyList =  action.payload;
        // },
   
    },

})

export const {  
    setCurrentPage,
    setToken,
    // setCompanyAlias,
    // setCompanyName,
    // setCompanyType,
    // setCompanyProgramSystem,
    // setCompanyList,

} = commonSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentPage:            state.common.currentPage,
        token: state.common.token,
        
        // companyAlias:           state.common.companyAlias,
        // companyName:            state.common.companyName,
        // companyType:            state.common.companyType,
        // companyProgramSystem:   state.common.companyProgramSystem,
        // companyList:            state.common.companyList,




    };
};

export default commonSlice.reducer;






