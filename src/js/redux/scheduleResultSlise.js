
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
        scheduleEventsListByGridEventId: {},







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
            for( let i = 0; i < action.payload.length; i++ ){
                obj[ action.payload[ i ].gridEventId ] = { ...action.payload[ i ] };
            };
            state.scheduleEventsListByGridEventId = obj;
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











    };
};

export default scheduleResultSlise.reducer;






