
import { createSlice } from '@reduxjs/toolkit';


export const layoutDragEventSlise = createSlice({

    name: 'layoutDragEvent',

    initialState: {

        dragStartFrom: '',
        // dragStartFileName : '',
        dragStartDuration : 0,
        dragStartEventId: null,
        dragStartCategoryId: null,
        dragStartStartTime: 0,
        dragStartGridEventId: null,
        // dragStartReleaseId: null,
        // dragStartLinkedFileDuration: 0,// // НЕ ИСПОЛЬЗОВАТЬ !!

        dragStartMinStartTime: 0,
        dragStartMaxStartTime: 24*60*60,


    },

    reducers: {

        clearAll( state ){
            state.dragStartFrom = '';  
            state.dragStartDuration = 0;  
            state.dragStartEventId = null;  
            state.dragStartCategoryId = null;  
            state.dragStartStartTime = 0;  
            state.dragStartGridEventId = null;  
            state.dragStartMinStartTime = 0;  
            state.dragStartMaxStartTime = 24*60*60;  

        },

        setDragStartFrom: ( state, action ) => {
            state.dragStartFrom =  action.payload;
        },

        // setDragStartFileName: ( state, action ) => {
        //     state.dragStartFileName =  action.payload;
        // },

        setDragStartDuration: ( state, action ) => {
            state.dragStartDuration =  action.payload;
        },

        setDragStartEventId: ( state, action ) => {
            state.dragStartEventId =  action.payload;
        },

        setDragStartStartTime: ( state, action ) => {
            state.dragStartStartTime =  action.payload;
        },

        setDragStartGridEventId: ( state, action ) => {
            state.dragStartGridEventId =  action.payload;
        },

        setDragStartCategoryId: ( state, action ) => {
            state.dragStartCategoryId =  action.payload;
        },

        
        // setDragStartReleaseId: ( state, action ) => {
        //     state.dragStartReleaseId =  action.payload;
        // },

        // setDragStartLinkedFileDuration: ( state, action ) => {
        //     state.dragStartLinkedFileDuration =  action.payload;
        // },

        setDragStartMinStartTime: ( state, action ) => {
            state.dragStartMinStartTime =  action.payload;
        },

        setDragStartMaxStartTime: ( state, action ) => {
            state.dragStartMaxStartTime =  action.payload;
        },





        


        
    },

})

export const {  
    clearAll,
    setDragStartFrom,
    // setDragStartFileName,
    setDragStartDuration,
    setDragStartEventId,
    setDragStartStartTime,
    setDragStartGridEventId,
    setDragStartCategoryId,
    // setDragStartReleaseId,
    // setDragStartLinkedFileDuration,

    setDragStartMinStartTime,
    setDragStartMaxStartTime,


} = layoutDragEventSlise.actions;

export const selectorData = ( state ) => {
    return {

        dragStartFrom:                  state.layoutDragEvent.dragStartFrom,

        // dragStartFileName:              state.layoutDragEvent.dragStartFileName,
        dragStartDuration:              state.layoutDragEvent.dragStartDuration,
        dragStartEventId:               state.layoutDragEvent.dragStartEventId,
        dragStartCategoryId:            state.layoutDragEvent.dragStartCategoryId,
        dragStartStartTime:             state.layoutDragEvent.dragStartStartTime,
        dragStartGridEventId:           state.layoutDragEvent.dragStartGridEventId,
        // dragStartReleaseId:             state.layoutDragEvent.dragStartReleaseId,
        // dragStartLinkedFileDuration:    state.layoutDragEvent.dragStartLinkedFileDuration,
        dragStartMinStartTime:          state.layoutDragEvent.dragStartMinStartTime,
        dragStartMaxStartTime:          state.layoutDragEvent.dragStartMaxStartTime,




        

    };
};

export default layoutDragEventSlise.reducer;






