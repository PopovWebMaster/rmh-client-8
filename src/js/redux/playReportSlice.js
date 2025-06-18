
import { createSlice } from '@reduxjs/toolkit';

export const playReportSlice = createSlice({

    name: 'playReport',

    initialState: {
        searchFocus: false,
        searchValue: '',
        searchDate: '',
        searchPeriod: null, // current_month  preview_month all

        calendarIsOpen: false,
        playReportList: {},

        month: 0,
        monthTitle: '',
        year: 0,
        monthCalendar: [],

        min_year: 0,
        min_month: 0,

        max_year: 0,
        max_month: 0,

        entireList: [],
        filteredList: [],

        dateListSelected: null,



        backligthPrefixList: {},


        detailDataWindow_isOpen: false,

        resultPointsSec: [],







    },

    reducers: {

        setSearchFocus: ( state, action ) => {
            state.searchFocus =  action.payload;
        },

        setSearchValue: ( state, action ) => {
            state.searchValue =  action.payload;
        },

        setSearchDate: ( state, action ) => {
            state.searchDate =  action.payload;
        },


        setCalendarIsOpen: ( state, action ) => {
            state.calendarIsOpen =  action.payload;
        },

        setPlayReportList: ( state, action ) => {
            state.playReportList =  action.payload;
        },




        setMonth: ( state, action ) => {
            state.month =  action.payload;
        },
        setMonthTitle: ( state, action ) => {
            state.monthTitle =  action.payload;
        },
        setYear: ( state, action ) => {
            state.year =  action.payload;
        },
        setMonthCalendar: ( state, action ) => {
            state.monthCalendar =  action.payload;
        },

        setMinYear: ( state, action ) => {
            state.min_year =  action.payload;
        },
        setMaxYear: ( state, action ) => {
            state.max_year =  action.payload;
        },
        setMaxMonth: ( state, action ) => {
            state.max_month =  action.payload;
        },
        setMinMonth: ( state, action ) => {
            state.min_month =  action.payload;
        },


        setSearchPeriod: ( state, action ) => {
            state.searchPeriod =  action.payload;
        },


        setEntireList: ( state, action ) => {
            state.entireList =  action.payload;
        },

        setFilteredList: ( state, action ) => {
            state.filteredList =  action.payload;
        },

        setDateListSelected: ( state, action ) => {
            state.dateListSelected =  action.payload;
        },

        setBackligthPrefixList: ( state, action ) => {
            state.backligthPrefixList =  action.payload;
        },


        addBackligthPrefix: ( state, action ) => {
            let obj = { ...state.backligthPrefixList };
            obj[ action.payload ] = false;
            state.backligthPrefixList =  obj;
        },

        setDetailDataWindowIsOpen: ( state, action ) => {
            state.detailDataWindow_isOpen =  action.payload;
        },

        setResultPointsSec: ( state, action ) => {
            state.resultPointsSec =  action.payload;
        },


        
        
        
        
    },

})

export const {  
    setSearchFocus,
    setSearchValue,
    setSearchDate,
    setCalendarIsOpen,
    setPlayReportList,
   
    setMonth,
    setMonthTitle,
    setYear,
    setMonthCalendar,
    setMinYear,
    setMaxYear,
    setMaxMonth,
    setMinMonth,
    setSearchPeriod,

    setEntireList,
    setFilteredList,
    setDateListSelected,

    addBackligthPrefix,
    setBackligthPrefixList,
    setDetailDataWindowIsOpen,
    setResultPointsSec,

} = playReportSlice.actions;

export const selectorData = ( state ) => {
    return {
        searchFocus: state.playReport.searchFocus,
        searchValue: state.playReport.searchValue,
        searchDate: state.playReport.searchDate,
        searchPeriod: state.playReport.searchPeriod,


        calendarIsOpen: state.playReport.calendarIsOpen,
        playReportList: state.playReport.playReportList,

        month: state.playReport.month,
        monthTitle: state.playReport.monthTitle,
        year: state.playReport.year,
        monthCalendar: state.playReport.monthCalendar,

        min_year: state.playReport.min_year,
        max_year: state.playReport.max_year,
        max_month: state.playReport.max_month,
        min_month: state.playReport.min_month,

        entireList: state.playReport.entireList,
        filteredList: state.playReport.filteredList,

        dateListSelected: state.playReport.dateListSelected,
        backligthPrefixList: state.playReport.backligthPrefixList,

        detailDataWindow_isOpen: state.playReport.detailDataWindow_isOpen,
        resultPointsSec: state.playReport.resultPointsSec,



        
        



        
        

    };
};

export default playReportSlice.reducer;






