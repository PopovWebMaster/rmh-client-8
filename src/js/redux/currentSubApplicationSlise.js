
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

        eventId: null,

        currentCharType: null,


        releaseDuration: null,
        releaseName: null,

        periodFrom: null,
        periodTo: null,





    },

    reducers: {

        currentSubAppClearAll: ( state, action ) => {
            state.currentSubAppId =     null;

            state.categoryColorBG =     null;
            state.categoryColorText =   null;
            state.categoryId =          null;
            state.categoryName =        null;
            state.categoryPrefix =      null;

            state.eventId =      null;
            state.currentCharType =      null;
            state.releaseDuration =      null;
            state.releaseName =      null;



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

        setEventData: ( state, action ) => {

            let { 
                id,
            } = action.payload;

            state.eventId = id;

        },

        setCurrentCharType: ( state, action ) => {
            state.currentCharType =  action.payload;
        },



        setReleaseDuration: ( state, action ) => {
            state.releaseDuration =  action.payload;
        },

        setReleaseName: ( state, action ) => {
            state.releaseName =  action.payload;
        },
        
        setPeriodFrom: ( state, action ) => {
            state.periodFrom =  action.payload;
        },

        setPeriodTo: ( state, action ) => {
            state.periodTo =  action.payload;
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
    setEventData,
    setCurrentCharType,


    setReleaseDuration,
    setReleaseName,
    setPeriodFrom,
    setPeriodTo,




} = currentSubApplicationSlise.actions;

export const selectorData = ( state ) => {
    return {
        currentSubAppId: state.currentSubApplication.currentSubAppId,

        categoryColorBG:    state.currentSubApplication.categoryColorBG,
        categoryColorText:  state.currentSubApplication.categoryColorText,
        categoryId:         state.currentSubApplication.categoryId,
        categoryName:       state.currentSubApplication.categoryName,
        categoryPrefix:     state.currentSubApplication.categoryPrefix,

        eventId:     state.currentSubApplication.eventId,
        currentCharType:     state.currentSubApplication.currentCharType,

        releaseDuration: state.currentSubApplication.releaseDuration,
        releaseName: state.currentSubApplication.releaseDuration,

        periodFrom: state.currentSubApplication.periodFrom,
        periodTo: state.currentSubApplication.periodTo,





        // participatingEventsList:    state.currentSubApplication.participatingEventsList,
        // eventTypesList:             state.currentSubApplication.eventTypesList,
        // currentEventType:           state.currentSubApplication.currentEventType,






        


    };
};

export default currentSubApplicationSlise.reducer;






