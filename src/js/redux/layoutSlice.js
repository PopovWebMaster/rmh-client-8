
import { createSlice } from '@reduxjs/toolkit';

// import { get_all_colors_from_category_list } from './vendors/get_all_colors_from_category_list.js';
import { get_all_lists_of_values_from_category_list } from './vendors/get_all_lists_of_values_from_category_list.js';
import { get_all_lists_of_values_from_events_list } from './vendors/get_all_lists_of_values_from_events_list.js';
import { get_all_list_of_values_grom_grid_events_list } from './vendors/get_all_list_of_values_grom_grid_events_list.js';

import { WEEK_NAME } from './../config/week.js';

export const layoutSlice = createSlice({

    name: 'layout',

    initialState: {

        weekKeyPointList: [
            [], [], [], [], [], [], [] // time,description, ms
        ],
        pointListIsChanged: false,
        categoryList: [],
        categoryListById: {},
        categoryesIsChanged: false,
        allUsedColors: [],
        allUsedNames: [],
        allUsedPrefixes: [],
        eventList: [],
        eventListById: {},
        eventsIsChanged: false,

        gridCurrentDay: 0, // 0 1 2 3 4 5 6
        gridCurrentDayName: WEEK_NAME[ 0 ],
        gridDayEventsList: [ [], [], [], [], [], [], [] ],
        gridDayEventsListById: {},
        gridOneDayList: [],


                /*
        gridDayEventsList[0][0] = {
            id: 1,
            firstSegmentId: 1,
            eventId: 1,
            notes: '',
            isKeyPoint: true,
            startTime: 100, // время в секундах
            durationTime: 1000, // время в секундах
            pushIt: null, // null 'up' 'down'

        }
        
        */


        gridDayEventsIsChanges: false,

        gridEmptySegmentMaxHeightEm: 0,
        gridEmptySegmentMinHeightEm: 1.6, // взято из минимальной высоты элемента по стилям



    },

    reducers: {



        setWeekKeyPointList: ( state, action ) => {
            state.weekKeyPointList =  action.payload;
        },

        setWeekKeyPointListAsChanged: ( state, action ) => {
            state.weekKeyPointList =  action.payload;
            state.pointListIsChanged =  true;
        },

        setPointListIsChanged: ( state, action ) => {
            state.pointListIsChanged =  action.payload;
        },

        setCategoryesIsChanged: ( state, action ) => {
            state.categoryesIsChanged =  action.payload;
        },
    
        setCategoryList: ( state, action ) => {
            state.categoryList =  action.payload;
            let { allUsedColors, allUsedNames, allUsedPrefixes, categoryListById } = get_all_lists_of_values_from_category_list( action.payload );
            state.allUsedColors = allUsedColors;
            state.allUsedNames = allUsedNames;
            state.allUsedPrefixes = allUsedPrefixes;
            state.categoryListById = categoryListById;
        },

        setCategoryListAsChanged: ( state, action ) => {
            state.categoryList =  action.payload;
            state.categoryesIsChanged =  true;
            let { allUsedColors, allUsedNames, allUsedPrefixes, categoryListById } = get_all_lists_of_values_from_category_list( action.payload );
            state.allUsedColors = allUsedColors;
            state.allUsedNames = allUsedNames;
            state.allUsedPrefixes = allUsedPrefixes;
            state.categoryListById = categoryListById;


        },

        setEventsIsChanged: ( state, action ) => {
            state.eventsIsChanged =  action.payload;
        },
    
        setEventList: ( state, action ) => {
            state.eventList =  action.payload;
            let { eventListById } = get_all_lists_of_values_from_events_list( action.payload );
            state.eventListById = eventListById;
            
        },

        setEventListAsChanged: ( state, action ) => {
            state.eventList =  action.payload;
            let { eventListById } = get_all_lists_of_values_from_events_list( action.payload );
            state.eventListById = eventListById;
            state.eventsIsChanged =  true;
        },




        setGridCurrentDay: ( state, action ) => {
            state.gridCurrentDay =  action.payload;
            state.gridCurrentDayName = WEEK_NAME[ action.payload ];

        },

        setGridDayEventsIsChanges: ( state, action ) => {
            state.gridDayEventsIsChanges =  action.payload;
        },
    
        setGridDayEventsList: ( state, action ) => {
            state.gridDayEventsList =  action.payload;
            let { gridDayEventsListById } = get_all_list_of_values_grom_grid_events_list( action.payload );
            state.gridDayEventsListById = gridDayEventsListById;
        },

        setGridDayEventsListAsChanged: ( state, action ) => {
            state.gridDayEventsList =  action.payload;
            state.gridDayEventsIsChanges =  true;

            let { gridDayEventsListById } = get_all_list_of_values_grom_grid_events_list( action.payload );
            state.gridDayEventsListById = gridDayEventsListById;
        },


        setGridEmptySegmentMaxHeightEm: ( state, action ) => {
            state.gridEmptySegmentMaxHeightEm =  action.payload;
        },

        setGridEmptySegmentMinHeightEm: ( state, action ) => {
            state.gridEmptySegmentMinHeightEm =  action.payload;
        },


        setGridOneDayList: ( state, action ) => {
            state.gridOneDayList =  action.payload;
        },

        


        
        
    },

})

export const {  
    setWeekKeyPointList,
    setPointListIsChanged,
    setWeekKeyPointListAsChanged,
    setCategoryesIsChanged,
    setCategoryList,
    setCategoryListAsChanged,
    setEventsIsChanged,
    setEventList,
    setEventListAsChanged,

    setGridCurrentDay,

    setGridDayEventsIsChanges,
    setGridDayEventsList,
    setGridDayEventsListAsChanged,

    setGridOneDayList,

    setGridEmptySegmentMaxHeightEm,
    setGridEmptySegmentMinHeightEm,
   

} = layoutSlice.actions;

export const selectorData = ( state ) => {
    return {
        weekKeyPointList:   state.layout.weekKeyPointList,
        pointListIsChanged: state.layout.pointListIsChanged,

        categoryList: state.layout.categoryList,
        categoryListById: state.layout.categoryListById,
        categoryesIsChanged: state.layout.categoryesIsChanged,

        eventList: state.layout.eventList,
        eventListById: state.layout.eventListById,
        eventsIsChanged: state.layout.eventsIsChanged,
        allUsedColors: state.layout.allUsedColors,
        allUsedNames: state.layout.allUsedNames,
        allUsedPrefixes: state.layout.allUsedPrefixes,


        gridCurrentDay: state.layout.gridCurrentDay,
        gridCurrentDayName: state.layout.gridCurrentDayName,
        gridDayEventsList: state.layout.gridDayEventsList,
        gridDayEventsListById: state.layout.gridDayEventsListById,
        gridDayEventsIsChanges: state.layout.gridDayEventsIsChanges,
        gridOneDayList: state.layout.gridOneDayList,

        gridEmptySegmentMaxHeightEm: state.layout.gridEmptySegmentMaxHeightEm,
        gridEmptySegmentMinHeightEm: state.layout.gridEmptySegmentMinHeightEm,


        


    };
};

export default layoutSlice.reducer;






