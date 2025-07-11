
import { createSlice } from '@reduxjs/toolkit';

// import { ScheduleClass } from './../classes/ScheduleClass.js';


export const scheduleSlise = createSlice({

    name: 'schedule',

    initialState: {

        charType: null,

        releaseName: '',
        releaseDuration: '',

        categoryId: null,
        categoryColorBg: '',
        categoryColorText: '',
        categoryName: '',
        categoryPrefix: '',


        eventId: null,
        eventCategoryId: null,
        eventName: null,
        eventDurationTime: null,
        eventNotes: null,
        eventType: null,

        periodFrom: '',
        periodTo: '',

        allTimePointsList: [],

        dayList: [],

        allReleaseLength: 0,
        allReleaseDuration: 0,

        gridEventTable: {},

        isChanged: false,



        



        // scheduleIsOpen: false,
        // Schedule: null,




    },

    reducers: {

        clearAll: ( state, action ) => {
            state.charType =  null;
            state.releaseName = '';
            state.releaseDuration = '';
            state.categoryId = null;
            state.categoryColorBg = '';
            state.categoryColorText = '';
            state.categoryName = '';
            state.categoryPrefix = '';
            state.eventId = null;
            state.eventCategoryId = null;
            state.eventName = null;
            state.eventDurationTime = null;
            state.eventNotes = null;
            state.eventType = null;
            state.periodFrom = '';
            state.periodTo = '';
            state.allTimePointsList = [];
            state.dayList = [];
            state.gridEventTable = {};
            state.allReleaseLength = 0;
            state.allReleaseDuration = 0;
            state.isChanged = false;







        },

        setCharType: ( state, action ) => {
            state.charType =  action.payload;
        },

        setReleaseName: ( state, action ) => {
            state.releaseName =  action.payload;
        },

        setReleaseDuration: ( state, action ) => {
            state.releaseDuration =  action.payload;
        },




        setCategoryId: ( state, action ) => {
            state.categoryId =  action.payload;
        },

        setCategoryColorBg: ( state, action ) => {
            state.categoryColorBg =  action.payload;
        },

        setCategoryColorText: ( state, action ) => {
            state.categoryColorText =  action.payload;
        },

        setCategoryName: ( state, action ) => {
            state.categoryName =  action.payload;
        },

        setCategoryPrefix: ( state, action ) => {
            state.categoryPrefix =  action.payload;
        },





        setEventId: ( state, action ) => {
            state.eventId =  action.payload;
        },

        setEventCategoryId: ( state, action ) => {
            state.eventCategoryId =  action.payload;
        },

        setEventName: ( state, action ) => {
            state.eventName =  action.payload;
        },

        setEventDurationTime: ( state, action ) => {
            state.eventDurationTime =  action.payload;
        },

        setEventNotes: ( state, action ) => {
            state.eventNotes =  action.payload;
        },

        setEventType: ( state, action ) => {
            state.eventType =  action.payload;
        },

        setPeriodFrom: ( state, action ) => {
            state.periodFrom =  action.payload;
        },

        setPeriodTo: ( state, action ) => {
            state.periodTo =  action.payload;
        },



        setAllTimePointsList: ( state, action ) => {
            state.allTimePointsList =  action.payload;
        },

        setDayList: ( state, action ) => {
            state.dayList =  action.payload;
        },

        setAllReleaseLength: ( state, action ) => {
            state.allReleaseLength =  action.payload;
        },

        setAllReleaseDuration: ( state, action ) => {
            state.allReleaseDuration =  action.payload;
        },

        setIsChanged: ( state, action ) => {
            state.isChanged =  action.payload;
        },


        setGridEventTable: ( state, action ) => {
            state.gridEventTable =  action.payload;
        },


        



        
    },

})

export const {  
    clearAll,
    setCharType,

    setReleaseName,
    setReleaseDuration,

    setCategoryId,
    setCategoryColorBg,
    setCategoryColorText,
    setCategoryName,
    setCategoryPrefix,


    setEventId,
    setEventCategoryId,
    setEventName,
    setEventDurationTime,
    setEventNotes,
    setEventType,

    setPeriodFrom,
    setPeriodTo,
    setAllTimePointsList,
    setDayList,

    setAllReleaseLength,
    setAllReleaseDuration,
    setIsChanged,
    setGridEventTable,

} = scheduleSlise.actions;

export const selectorData = ( state ) => {
    return {
        // scheduleIsOpen: state.schedule.scheduleIsOpen,
        charType:           state.schedule.charType,
        releaseName:        state.schedule.releaseName,
        releaseDuration:    state.schedule.releaseDuration,


        categoryId:         state.schedule.categoryId,
        categoryColorBg:    state.schedule.categoryColorBg,
        categoryColorText:  state.schedule.categoryColorText,
        categoryName:       state.schedule.categoryName,
        categoryPrefix:     state.schedule.categoryPrefix,


        eventId:            state.schedule.eventId,
        eventCategoryId:    state.schedule.eventCategoryId,
        eventName:          state.schedule.eventName,
        eventDurationTime:  state.schedule.eventDurationTime,
        eventNotes:         state.schedule.eventNotes,
        eventType:          state.schedule.eventType,

        periodFrom:          state.schedule.periodFrom,
        periodTo:          state.schedule.periodTo,

        allTimePointsList:          state.schedule.allTimePointsList,
        dayList:          state.schedule.dayList,

        allReleaseLength:          state.schedule.allReleaseLength,
        allReleaseDuration:          state.schedule.allReleaseDuration,
        isChanged:          state.schedule.isChanged,
        gridEventTable:          state.schedule.gridEventTable,











    };
};

export default scheduleSlise.reducer;






