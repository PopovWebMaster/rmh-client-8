

import { createSlice } from '@reduxjs/toolkit';

import { get_date_now_YYYY_MM_DD } from './../helpers/get_date_now_YYYY_MM_DD.js';


export const airFilesSlice = createSlice({

    name: 'airFiles',

    initialState: {
        filePrefixList: [],
        // periodFrom: get_date_now_YYYY_MM_DD(),
        // periodTo: get_date_now_YYYY_MM_DD(),

        periodFrom: '',
        periodTo: get_date_now_YYYY_MM_DD(),

        airFiles: {},
        airFilesByEventId: {},

        airFilesIsChanged: false,



        filterItems: [],
        filterItemsByEventId: {},
        filterSearchValue: '',

        filteredList: [],
        filteredListByName: {},

        issetChackedValues: false,


        currentFilterEventId: null,


    },

    reducers: {

        setFilePrefixList: ( state, action ) => {
            state.filePrefixList = action.payload;
        },

        setPeriodFrom: ( state, action ) => {
            state.periodFrom = action.payload;
        },

        setPeriodTo: ( state, action ) => {
            state.periodTo = action.payload;
        },

        setAirFiles: ( state, action ) => {
            /*
                Внимание!!! записывть только через ...\air_files\vendors\set_air_files_to_store.js
            */
            state.airFiles = action.payload;
        },
        setAirFilesByEventId: ( state, action ) => {
            /*
                Внимание!!! записывть только через ...\air_files\vendors\set_air_files_to_store.js
            */
            state.airFilesByEventId = action.payload;
        },
        setFilterItems: ( state, action ) => {
            /*
                Внимание!!! записывть только через ...\air_files\vendors\set_air_files_to_store.js
            */
            state.filterItems = action.payload;
        },

        setFilterItemsByEventId: ( state, action ) => {
            /*
                Внимание!!! записывть только через ...\air_files\vendors\set_air_files_to_store.js
            */
            state.filterItemsByEventId = action.payload;
        },

        setAirFilesIsChanged: ( state, action ) => {
            /*
                Внимание!!! записывть только через ...\air_files\vendors\set_air_files_to_store.js
            */
            state.airFilesIsChanged = action.payload;
        },


        


        


        setCurrentFilterEventId: ( state, action ) => {
            state.currentFilterEventId = action.payload;
        },

        setFilterSearchValue: ( state, action ) => {
            state.filterSearchValue = action.payload;
        },


        setFilteredList: ( state, action ) => {
            state.filteredList = action.payload;
        },


        setFilteredListByName: ( state, action ) => {
            state.filteredListByName = action.payload;
        },

        setIssetChackedValues: ( state, action ) => {
            state.issetChackedValues = action.payload;
        },



        

        



        

   
    },

})

export const {  
    setFilePrefixList,
    setPeriodFrom,
    setPeriodTo,
    setAirFiles,
    setAirFilesByEventId,
    setAirFilesIsChanged,
    setFilterItems,
    setCurrentFilterEventId,
    setFilterItemsByEventId,
    setFilterSearchValue,
    setFilteredList,
    setFilteredListByName,
    setIssetChackedValues,


} = airFilesSlice.actions;

export const selectorData = ( state ) => {

    return {
        filePrefixList: state.airFiles.filePrefixList,
        periodFrom:     state.airFiles.periodFrom,
        periodTo:       state.airFiles.periodTo,


        airFiles:               state.airFiles.airFiles,
        airFilesByEventId:      state.airFiles.airFilesByEventId,
        airFilesIsChanged:      state.airFiles.airFilesIsChanged,
        filterItems:            state.airFiles.filterItems,
        filterItemsByEventId:   state.airFiles.filterItemsByEventId,


        
        currentFilterEventId:   state.airFiles.currentFilterEventId,
        filterSearchValue:   state.airFiles.filterSearchValue,
        filteredList:   state.airFiles.filteredList,
        filteredListByName:   state.airFiles.filteredListByName,
        issetChackedValues:   state.airFiles.issetChackedValues,






        



    };
};

export default airFilesSlice.reducer;






