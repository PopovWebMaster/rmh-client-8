
import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({

    name: 'admin',

    initialState: {
        companies: [],
        companiesById: {},

        defaultProgramSystem: '',

        defaultCompanyType: '',


    },

    reducers: {

        setCompanies: ( state, action ) => {
            state.companies =  action.payload;
            let obj = {};
            for( let i = 0; i < action.payload.length; i++ ){
                let { company_id } = action.payload[ i ];
                obj[ company_id ] = action.payload[ i ];
            };
            state.companiesById =  obj;
        },

        setDefaultProgramSystem: ( state, action ) => {
            state.defaultProgramSystem =  action.payload;
        },

        setDefaultCompanyType: ( state, action ) => {
            state.defaultCompanyType =  action.payload;
        },



        
    },

})

export const {  
    setCompanies,
    setDefaultProgramSystem,
    setDefaultCompanyType,

   

} = adminSlice.actions;

export const selectorData = ( state ) => {

    return {
        companies:              state.admin.companies,
        companiesById:          state.admin.companiesById,
        defaultProgramSystem:   state.admin.defaultProgramSystem,
        defaultCompanyType:     state.admin.defaultCompanyType,


    };
};

export default adminSlice.reducer;






