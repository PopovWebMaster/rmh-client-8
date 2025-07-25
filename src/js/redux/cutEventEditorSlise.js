
import { createSlice } from '@reduxjs/toolkit';

export const cutEventEditorSlise = createSlice({

    name: 'cutEventEditor',

    initialState: {

        editorIsOpen: false,
        eventsPartsList: [],
        eventId: null,
        eventStyle: {},
        eventName: '',
        
        maxDurationTime: 0,
        // categoryData: null,




    },

    reducers: {

        setEditorIsOpen: ( state, action ) => {
            state.editorIsOpen =  action.payload;
        },
        setEventsPartsList: ( state, action ) => {
            state.eventsPartsList =  action.payload;
        },

        setEventId: ( state, action ) => {
            state.eventId =  action.payload;
        },

        setEventStyle: ( state, action ) => {
            state.eventStyle =  action.payload;
        },

        setMaxDurationTime: ( state, action ) => {
            state.maxDurationTime =  action.payload;
        },

        setSutEventData: ( state, action ) => {
            let {
                eventParts,
                maxDurationTime,
                eventId,
                eventStyle,
                eventName,
            } = action.payload;

            state.editorIsOpen =        true;
            state.eventId =             eventId;
            state.eventsPartsList =     eventParts;
            state.eventStyle =          eventStyle;
            state.maxDurationTime =     maxDurationTime;
            state.eventName =     eventName;


            

        },


        
    },

})

export const {  
    setEditorIsOpen,
    setEventsPartsList,

    setEventId,
    setEventStyle,
    setMaxDurationTime,
    setSutEventData,



} = cutEventEditorSlise.actions;

export const selectorData = ( state ) => {
    return {
        editorIsOpen: state.cutEventEditor.editorIsOpen,
        eventsPartsList: state.cutEventEditor.eventsPartsList,

        eventId: state.cutEventEditor.eventId,
        eventStyle: state.cutEventEditor.eventStyle,
        maxDurationTime: state.cutEventEditor.maxDurationTime,
        eventName: state.cutEventEditor.eventName,







    };
};

export default cutEventEditorSlise.reducer;






