
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
        currentAppEventId: null,

        currentAppNum: null,
        currentAppManagerNotes: '',
        currentSubAppList: [],
        currentSubAppListById: {},



        envIsOpen: false,




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

            let obj = {};
            for( let i = 0; i < action.payload.length; i++ ){
                let { id } = action.payload[ i ];
                obj[ id ] = { ...action.payload[ i ] }

            };

            state.currentSubAppListById =  obj;
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

        setCurrentAppEventId: ( state, action ) => {
            state.currentAppEventId =  action.payload;
        },


        setEnvIsOpen: ( state, action ) => {
            state.envIsOpen =  action.payload;
        },









        


        
    },

})

export const {  
    setApplicationList,
    setCurrentApplicationId,
    setCurrentCategoryIdOfListFilter,




    setCurrentAppName,
    setCurrentAppCategoryId,
    setCurrentAppEventId,
    setCurrentAppNum,
    setCurrentSubAppList,
    setCurrentAppManagerNotes,
    // setCurrentAppOrders,
    setCurrentAppIsChanged,

    setEnvIsOpen,



} = applicationSlice.actions;

export const selectorData = ( state ) => {
    return {
        applicationList:                state.application.applicationList,
        applicationById:                state.application.applicationById,
        currentApplicationId:           state.application.currentApplicationId,
        currentCategoryIdOfListFilter:  state.application.currentCategoryIdOfListFilter,

        currentAppName:         state.application.currentAppName,
        currentAppCategoryId:   state.application.currentAppCategoryId,
        currentAppEventId:   state.application.currentAppEventId,

        currentAppNum:          state.application.currentAppNum,
        currentAppManagerNotes: state.application.currentAppManagerNotes,
        currentSubAppList:      state.application.currentSubAppList,
        currentSubAppListById:      state.application.currentSubAppListById,


        

        currentAppIsChanged:    state.application.currentAppIsChanged,


        envIsOpen:    state.application.envIsOpen,




    };
};

export default applicationSlice.reducer;






