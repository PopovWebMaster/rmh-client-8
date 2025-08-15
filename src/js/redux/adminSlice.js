
import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({

    name: 'admin',

    initialState: {
        companies: [],
        companiesById: {},

        defaultProgramSystem: '',

        defaultCompanyType: '',


        currentCompanyIsChanged: false,
        currentCompanyId: null,
        currentCompanyName: '',
        currentCompanyAlias: '',
        currentCompanyProgramSystem: '',
        currentCompanyLegalName: '',
        currentCompanyCity: '',
        currentCompanyPersonal: [],
        currentCompanyType: '',




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

        setCurrentCompanyId: ( state, action ) => {
            state.currentCompanyId =  action.payload;
        },

        setCurrentCompanyIsChanged: ( state, action ) => {
            state.currentCompanyIsChanged =  action.payload;
        },



        setCurrentCompanyName: ( state, action ) => {
            state.currentCompanyName =  action.payload;
        },

        setCurrentCompanyAlias: ( state, action ) => {
            state.currentCompanyAlias =  action.payload;
        },

        setCurrentCompanyProgramSystem: ( state, action ) => {
            state.currentCompanyProgramSystem =  action.payload;
        },

        setCurrentCompanyLegalName: ( state, action ) => {
            state.currentCompanyLegalName =  action.payload;
        },

        setCurrentCompanyCity: ( state, action ) => {
            state.currentCompanyCity =  action.payload;
        },

        setCurrentCompanyPersonal: ( state, action ) => {
            state.currentCompanyPersonal =  action.payload;
        },

        setCurrentCompanyType: ( state, action ) => {
            state.currentCompanyType =  action.payload;
        },



        



        
    },

})

export const {  
    setCompanies,
    setDefaultProgramSystem,
    setDefaultCompanyType,
    setCurrentCompanyId,
    setCurrentCompanyName,
    setCurrentCompanyAlias,
    setCurrentCompanyProgramSystem,
    setCurrentCompanyLegalName,
    setCurrentCompanyCity,
    setCurrentCompanyPersonal,
    setCurrentCompanyIsChanged,
    setCurrentCompanyType,

   

} = adminSlice.actions;

export const selectorData = ( state ) => {

    return {
        companies:                  state.admin.companies,
        companiesById:              state.admin.companiesById,
        defaultProgramSystem:       state.admin.defaultProgramSystem,
        defaultCompanyType:         state.admin.defaultCompanyType,
        currentCompanyIsChanged:    state.admin.currentCompanyIsChanged,

        currentCompanyId:               state.admin.currentCompanyId,
        currentCompanyName:             state.admin.currentCompanyName,
        currentCompanyAlias:            state.admin.currentCompanyAlias,
        currentCompanyProgramSystem:    state.admin.currentCompanyProgramSystem,
        currentCompanyLegalName:        state.admin.currentCompanyLegalName,
        currentCompanyCity:             state.admin.currentCompanyCity,
        currentCompanyPersonal:         state.admin.currentCompanyPersonal,
        currentCompanyType:             state.admin.currentCompanyType,


        



    };
};

export default adminSlice.reducer;






