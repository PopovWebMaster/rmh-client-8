
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
        releaseListByGridEventId: {},






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

        setReleaseListByGridEventId: ( state, action ) => {
            state.releaseListByGridEventId =  action.payload;
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
    setReleaseListByGridEventId,


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
        releaseListByGridEventId: state.scheduleResult.releaseListByGridEventId,










    };
};

export default scheduleResultSlise.reducer;






