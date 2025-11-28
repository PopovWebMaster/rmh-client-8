
import { createSlice } from '@reduxjs/toolkit';


export const scheduleResultDragEventSlise = createSlice({

    name: 'scheduleResultDragEvent',

    initialState: {

        dragStartFrom: '',


        dragStartFileName : '',
        dragStartDuration : 0,
        dragStartEventId: null,
        dragStartCategoryId: null,


        dragStartStartTime: 0,
        dragStartGridEventId: null,
        dragStartReleaseId: null,



    },

    reducers: {

        setDragStartFrom: ( state, action ) => {
            state.dragStartFrom =  action.payload;
        },

        setDragStartFileName: ( state, action ) => {
            state.dragStartFileName =  action.payload;
        },

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

        
        setDragStartReleaseId: ( state, action ) => {
            state.dragStartReleaseId =  action.payload;
        },


        


        
    },

})

export const {  
    setDragStartFrom,
    setDragStartFileName,
    setDragStartDuration,
    setDragStartEventId,
    setDragStartStartTime,
    setDragStartGridEventId,
    setDragStartCategoryId,
    setDragStartReleaseId,


} = scheduleResultDragEventSlise.actions;

export const selectorData = ( state ) => {
    return {

        dragStartFrom: state.scheduleResultDragEvent.dragStartFrom,

        dragStartFileName: state.scheduleResultDragEvent.dragStartFileName,
        dragStartDuration: state.scheduleResultDragEvent.dragStartDuration,
        dragStartEventId: state.scheduleResultDragEvent.dragStartEventId,
        dragStartCategoryId: state.scheduleResultDragEvent.dragStartCategoryId,


        dragStartStartTime: state.scheduleResultDragEvent.dragStartStartTime,
        dragStartGridEventId: state.scheduleResultDragEvent.dragStartGridEventId,
        dragStartReleaseId: state.scheduleResultDragEvent.dragStartReleaseId,




        

    };
};

export default scheduleResultDragEventSlise.reducer;






