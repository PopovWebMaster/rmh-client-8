
import { createSlice } from '@reduxjs/toolkit';

import { get_all_lists_of_values_from_application_list } from './vendors/get_all_lists_of_values_from_application_list.js';


export const applicationSlice = createSlice({

    name: 'application',

    initialState: {

        applicationList: [],
        applicationById: {},
        currentApplicationId: null,

        currentCategoryIdOfListFilter: null,






        currentAppName: '',
        currentAppCategoryId: null,
        currentAppNum: null,
        currentAppManagerNotes: '',
        currentSubAppList: [],


        // currentAppType: null,
        // currentAppNotes: null,
        // currentAppOrders: [],
        currentAppIsChanged: false,

    },

    reducers: {

        setApplicationList: ( state, action ) => {
            state.applicationList =  action.payload;
            let { applicationById } = get_all_lists_of_values_from_application_list( action.payload );
            state.applicationById = applicationById;
        },

        setCurrentApplicationId: ( state, action ) => {
            state.currentApplicationId =  action.payload;
        },

        setCurrentCategoryIdOfListFilter: ( state, action ) => {
            state.currentCategoryIdOfListFilter =  action.payload;
        },





        setCurrentAppName: ( state, action ) => {
            state.currentAppName =  action.payload;
        },

        setCurrentAppCategoryId: ( state, action ) => {
            state.currentAppCategoryId =  action.payload;
        },

        setCurrentAppNum: ( state, action ) => {
            state.currentAppNum =  action.payload;
        },

        setCurrentSubAppList: ( state, action ) => {
            state.currentSubAppList =  action.payload;
        },

        setCurrentAppManagerNotes: ( state, action ) => {
            state.currentAppManagerNotes =  action.payload;
        },

        // setCurrentAppOrders: ( state, action ) => {
        //     state.currentAppOrders =  action.payload;
        // },

        setCurrentAppIsChanged: ( state, action ) => {
            state.currentAppIsChanged =  action.payload;
        },



        


        
    },

})

export const {  
    setApplicationList,
    setCurrentApplicationId,
    setCurrentCategoryIdOfListFilter,




    setCurrentAppName,
    setCurrentAppCategoryId,
    setCurrentAppNum,
    setCurrentSubAppList,
    setCurrentAppManagerNotes,
    // setCurrentAppOrders,
    setCurrentAppIsChanged,



} = applicationSlice.actions;

export const selectorData = ( state ) => {
    return {
        applicationList:                state.application.applicationList,
        applicationById:                state.application.applicationById,
        currentApplicationId:           state.application.currentApplicationId,
        currentCategoryIdOfListFilter:  state.application.currentCategoryIdOfListFilter,

        currentAppName:         state.application.currentAppName,
        currentAppCategoryId:   state.application.currentAppCategoryId,
        currentAppNum:          state.application.currentAppNum,
        currentAppManagerNotes: state.application.currentAppManagerNotes,
        currentSubAppList:      state.application.currentSubAppList,

        currentAppIsChanged:    state.application.currentAppIsChanged,



    };
};

export default applicationSlice.reducer;






