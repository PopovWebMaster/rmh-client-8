
import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({

    name: 'company',

    initialState: {
        // currentCompanyAlias: '1-resp',
        // currentCompanyName: 'Первый республиканский',
        // currentCompanyType: 'tv',

        currentCompanyAlias: null,
        currentCompanyName: null,
        currentCompanyType: null,
        companyProgramSystem: null,
        companyLegalName: '',



        companyList: [],


    },

    reducers: {

        setCurrentCompanyAlias: ( state, action ) => {
            state.currentCompanyAlias =  action.payload;
        },

        setCurrentCompanyName: ( state, action ) => {
            state.currentCompanyName =  action.payload;
        },

        setCompanyList: ( state, action ) => {
            state.companyList =  action.payload;
        },

        setCurrentCompanyType: ( state, action ) => {
            state.currentCompanyType =  action.payload;
        },

        setCompanyProgramSystem: ( state, action ) => {
            state.companyProgramSystem =  action.payload;
        },

        
        setCompanyLegalName: ( state, action ) => {
            state.companyLegalName =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setCurrentCompanyAlias,
    setCurrentCompanyName,
    setCompanyList,
    setCurrentCompanyType,
    setCompanyProgramSystem,
    setCompanyLegalName,
   

} = companySlice.actions;

export const selectorData = ( state ) => {
    return {
        currentCompanyAlias:        state.company.currentCompanyAlias,
        currentCompanyName:         state.company.currentCompanyName,
        companyList:                state.company.companyList,

        currentCompanyType:         state.company.currentCompanyType,
        companyProgramSystem:       state.company.companyProgramSystem,
        companyLegalName:       state.company.companyLegalName,



        

        
        
        

        


    };
};

export default companySlice.reducer;






