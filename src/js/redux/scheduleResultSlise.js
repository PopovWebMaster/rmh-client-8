
import { createSlice } from '@reduxjs/toolkit';

// import { ScheduleClass } from './../classes/ScheduleClass.js';
import { get_month_calendar } from './vendors/get_month_calendar.js';


export const scheduleResultSlise = createSlice({

    name: 'scheduleResult',

    initialState: {

        calendarMonth: 0,
        calendarYear: 0,
        calendarDate: 0,

        currentDate: 0,
        currentDayNum: 0,
        currentMonth: 0,
        currentYear: 0,

        monthCalendar: [],

        releaseList: [],
        releaseListById: {},
        releaseListByGridEventId: {},


        scheduleEventsList: [],
        scheduleEventBySectors: [],

        scheduleEventsListByGridEventId: {},
        scheduleEventsListIsChanged: false,

        dragebleReleaseId: null,
        dragebleReleaseEventId: null,

        usedReleasesById: {},
        usedFreeReleaseById: {},


        infoMessageText: '', // просто записываешь текст и он выскакивает. Реагирует на содержание строки

        allScheduleFileNames: [],



        freeReleasesIsChanges: false,
        freeReleasesList: [],
        freeReleasesListFromServerIsGetting: false,

        freeReleasesFiltered: {},

        freeReleasesFilterCategoryId: null,
        freeReleasesFilterEventId: null,

        eventsAsReleaseFilterCategoryId: null,
        eventsAsReleaseFiltered: null,









    },

    reducers: {



        setCalendarMonth: ( state, action ) => {
            state.calendarMonth =  action.payload;
        },

        setCalendarYear: ( state, action ) => {
            state.calendarYear =  action.payload;
        },

        setCalendarDate: ( state, action ) => {
            state.calendarDate =  action.payload;
        },


        setCurrentDate: ( state, action ) => {
            state.currentDate =  action.payload;
        },

        setCurrentDayNum: ( state, action ) => {
            state.currentDayNum =  action.payload;
        },

        setCurrentMonth: ( state, action ) => {
            state.currentMonth =  action.payload;
        },

        setCurrentYear: ( state, action ) => {
            state.currentYear =  action.payload;
        },


        setMonthCalendar: ( state, action ) => {
            let { year, month } = action.payload;

            state.monthCalendar = get_month_calendar( year, month );

        },

        setReleaseList: ( state, action ) => {
            state.releaseList =  action.payload;
        },


        setReleaseListById: ( state, action ) => {
            state.releaseListById =  action.payload;
        },



        

        setReleaseListByGridEventId: ( state, action ) => {
            state.releaseListByGridEventId =  action.payload;
        },

        setScheduleEventsList: ( state, action ) => {
            state.scheduleEventsList =  action.payload;

            let obj = {};
            let usedReleses = {};
            let usedFreeReleses = {};

            for( let i = 0; i < action.payload.length; i++ ){
                if( action.payload[ i ].gridEventId !== null ){
                    obj[ action.payload[ i ].gridEventId ] = { ...action.payload[ i ] };
                    let { releases } = action.payload[ i ];
                    for( let y = 0; y < releases.length; y++ ){
                        let { id } = releases[ y ];
                        usedReleses[ id ] = true;

                        if( typeof id === 'string' ) {
                            if( usedFreeReleses[ id ] ){
                                usedFreeReleses[ id ].count = usedFreeReleses[ id ].count + 1;
                            }else{
                                usedFreeReleses[ id ] = {
                                    count: 1,
                                };
                            };
                        }
                    };
                };
            };
            // usedFreeReleaseById
            state.scheduleEventsListByGridEventId = obj;
            state.usedReleasesById = usedReleses;
            state.usedFreeReleaseById = usedFreeReleses;


        },

        setScheduleEventsListIsChanged: ( state, action ) => {
            state.scheduleEventsListIsChanged =  action.payload;
        },

        


        setDragebleReleaseId: ( state, action ) => {
            state.dragebleReleaseId =  action.payload;
        },


        setDragebleReleaseEventId: ( state, action ) => {
            state.dragebleReleaseEventId =  action.payload;
        },

        setUsedReleasesById: ( state, action ) => {
            state.usedReleasesById =  action.payload;
        },





        setInfoMessageText: ( state, action ) => {
            state.infoMessageText =  action.payload;
        },


        setAllScheduleFileNames: ( state, action ) => {
            state.allScheduleFileNames =  action.payload;
        },

        setFreeReleasesIsChanges: ( state, action ) => {
            state.freeReleasesIsChanges =  action.payload;
        },

        setFreeReleasesList: ( state, action ) => {
            state.freeReleasesList =  action.payload;
        },

        setFreeReleasesListFromServerIsGetting: ( state, action ) => {
            state.freeReleasesListFromServerIsGetting =  action.payload;
        },

        


        setFreeReleasesFiltered: ( state, action ) => {
            state.freeReleasesFiltered =  action.payload;
        },


        
        setFreeReleasesFilterCategoryId: ( state, action ) => {
            state.freeReleasesFilterCategoryId =  action.payload;
        },

        setFreeReleasesFilterEventId: ( state, action ) => {
            state.freeReleasesFilterEventId =  action.payload;
        },

        setScheduleEventBySectors: ( state, action ) => {
            state.scheduleEventBySectors =  action.payload;
        },


        setEventsAsReleaseFilterCategoryId: ( state, action ) => {
            state.eventsAsReleaseFilterCategoryId =  action.payload;
        },


        setEventsAsReleaseFiltered: ( state, action ) => {
            state.eventsAsReleaseFiltered =  action.payload;
        },





        
    },

})

export const {  
    setCalendarMonth,
    setCalendarYear,
    setCalendarDate,

    setCurrentDate,
    setCurrentDayNum,
    setCurrentMonth,
    setCurrentYear,
    setMonthCalendar,
    setReleaseList,
    setReleaseListById,
    setReleaseListByGridEventId,
    setScheduleEventsList,
    setScheduleEventsListIsChanged,

    setDragebleReleaseId,
    setDragebleReleaseEventId,
    setUsedReleasesById,
    setInfoMessageText,
    setAllScheduleFileNames,

    setFreeReleasesIsChanges,
    setFreeReleasesList,
    setFreeReleasesListFromServerIsGetting,
    setFreeReleasesFiltered,
    setScheduleEventBySectors,


            
    setFreeReleasesFilterCategoryId,
    setFreeReleasesFilterEventId,
    setEventsAsReleaseFilterCategoryId,
    setEventsAsReleaseFiltered,




} = scheduleResultSlise.actions;

export const selectorData = ( state ) => {
    return {

        calendarMonth: state.scheduleResult.calendarMonth,
        calendarYear: state.scheduleResult.calendarYear,
        calendarDate: state.scheduleResult.calendarDate,


        currentDate: state.scheduleResult.currentDate,
        currentDayNum: state.scheduleResult.currentDayNum,
        currentMonth: state.scheduleResult.currentMonth,
        currentYear: state.scheduleResult.currentYear,
        monthCalendar: state.scheduleResult.monthCalendar,
        releaseList: state.scheduleResult.releaseList,
        releaseListById: state.scheduleResult.releaseListById,


        
        releaseListByGridEventId: state.scheduleResult.releaseListByGridEventId,
        scheduleEventsList: state.scheduleResult.scheduleEventsList,
        scheduleEventsListByGridEventId: state.scheduleResult.scheduleEventsListByGridEventId,
        scheduleEventsListIsChanged: state.scheduleResult.scheduleEventsListIsChanged,

        dragebleReleaseId: state.scheduleResult.dragebleReleaseId,
        dragebleReleaseEventId: state.scheduleResult.dragebleReleaseEventId,
        usedReleasesById: state.scheduleResult.usedReleasesById,
        infoMessageText: state.scheduleResult.infoMessageText,

        allScheduleFileNames: state.scheduleResult.allScheduleFileNames,


        freeReleasesIsChanges: state.scheduleResult.freeReleasesIsChanges,
        freeReleasesList: state.scheduleResult.freeReleasesList,
        freeReleasesListFromServerIsGetting: state.scheduleResult.freeReleasesListFromServerIsGetting,
        freeReleasesFiltered: state.scheduleResult.freeReleasesFiltered,

        freeReleasesFilterCategoryId: state.scheduleResult.freeReleasesFilterCategoryId,
        freeReleasesFilterEventId: state.scheduleResult.freeReleasesFilterEventId,
        scheduleEventBySectors: state.scheduleResult.scheduleEventBySectors,
        usedFreeReleaseById: state.scheduleResult.usedFreeReleaseById,


        eventsAsReleaseFilterCategoryId: state.scheduleResult.eventsAsReleaseFilterCategoryId,
        eventsAsReleaseFiltered: state.scheduleResult.eventsAsReleaseFiltered,




        



        

        
        














    };
};

export default scheduleResultSlise.reducer;






