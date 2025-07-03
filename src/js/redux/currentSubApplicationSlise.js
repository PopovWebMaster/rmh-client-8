
import { createSlice } from '@reduxjs/toolkit';


export const currentSubApplicationSlise = createSlice({

    name: 'currentSubApplication',

    initialState: {

        currentSubAppId: null,

        // categoryData: null,


        categoryColorBG: null,
        categoryColorText: null,
        categoryId: null,
        categoryName: null,
        categoryPrefix: null,


        participatingEventsList: [],

        eventTypesList: [],
        currentEventType: null,



        

    },

    reducers: {

        currentSubAppClearAll: ( state, action ) => {
            state.currentSubAppId =     null;

            state.categoryColorBG =     null;
            state.categoryColorText =   null;
            state.categoryId =          null;
            state.categoryName =        null;
            state.categoryPrefix =      null;

            state.participatingEventsList = [];
            state.eventTypesList = [];
            state.currentEventType = null;

        },

        setCurrentSubAppId: ( state, action ) => {
            state.currentSubAppId =  action.payload;
        },

        setCategoryData: ( state, action ) => {
            let { 
                colorBG,
                colorText,
                id,
                name,
                prefix
            } = action.payload;

            state.categoryColorBG =     colorBG;
            state.categoryColorText =   colorText;
            state.categoryId =          id;
            state.categoryName =        name;
            state.categoryPrefix =      prefix;

        },


        
        setParticipatingEventsList: ( state, action ) => {
            state.participatingEventsList =  action.payload;
        },

        setEventTypesList: ( state, action ) => {
            state.eventTypesList =  action.payload;
        },

        setCurrentEventType: ( state, action ) => {
            state.currentEventType =  action.payload;
        },




        



        
    },

})

export const {  
    setCurrentSubAppId,
    currentSubAppClearAll,
    setCategoryData,
    setParticipatingEventsList,
    setEventTypesList,
    setCurrentEventType,




} = currentSubApplicationSlise.actions;

export const selectorData = ( state ) => {
    return {
        currentSubAppId: state.currentSubApplication.currentSubAppId,

        categoryColorBG:    state.currentSubApplication.categoryColorBG,
        categoryColorText:  state.currentSubApplication.categoryColorText,
        categoryId:         state.currentSubApplication.categoryId,
        categoryName:       state.currentSubApplication.categoryName,
        categoryPrefix:     state.currentSubApplication.categoryPrefix,


        participatingEventsList:    state.currentSubApplication.participatingEventsList,
        eventTypesList:             state.currentSubApplication.eventTypesList,
        currentEventType:           state.currentSubApplication.currentEventType,






        


    };
};

export default currentSubApplicationSlise.reducer;






