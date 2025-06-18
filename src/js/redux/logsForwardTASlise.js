
import { createSlice } from '@reduxjs/toolkit';

export const logsForwardTASlise = createSlice({

    name: 'logsForwardTA',

    initialState: {
        // logDateMain: '',
        // logDateBackup: '',

        windowLeftWidth: 50, // %
        windowRightWidth: 50, // %
        minWidth: 20, // %
        borderMoverWidtnPx: 22,

        selectedAll: 'main', // backup
        selectedServerForReport: 'main', // backup


        processedListOfLogsMain: [],
        processedListOfLogsBackup: [],
        logFileDateMain: null,
        logFileDateBackup: null,
        logFileDurationMain: null,
        logFileDurationBackup: null,



  

    },

    reducers: {

        // setLogDateMain: ( state, action ) => {
        //     state.logDateMain =  action.payload;
        // },

        // setLogDateBackup: ( state, action ) => {
        //     state.logDateBackup =  action.payload;
        // },


        setWindowLeftWidth: ( state, action ) => {
            state.windowLeftWidth =  action.payload;
        },
        setWindowRightWidth: ( state, action ) => {
            state.windowRightWidth =  action.payload;
        },
        setMinWidth: ( state, action ) => {
            state.minWidth =  action.payload;
        },

        setBorderMoverWidtnPx: ( state, action ) => {
            state.borderMoverWidtnPx =  action.payload;
        },

        setSelectedAll: ( state, action ) => {
            state.selectedAll =  action.payload;
        },

        setSelectedServerForReport: ( state, action ) => {
            state.selectedServerForReport =  action.payload;
        },


        setProcessedListOfLogsMain: ( state, action ) => {
            state.processedListOfLogsMain =  action.payload;
        },
          
        setProcessedListOfLogsBackup: ( state, action ) => {
            state.processedListOfLogsBackup =  action.payload;
        },

        setLogFileDateMain: ( state, action ) => {
            state.logFileDateMain =  action.payload;
        },

        setLogFileDateBackup: ( state, action ) => {
            state.logFileDateBackup =  action.payload;
        },


        setLogFileDurationMain: ( state, action ) => {
            state.logFileDurationMain =  action.payload;
        },
        setLogFileDurationBackup: ( state, action ) => {
            state.logFileDurationBackup =  action.payload;
        },



        
    },

})

export const {  
    // setLogDateMain,
    // setLogDateBackup,
    setWindowLeftWidth,
    setWindowRightWidth,
    setMinWidth,
    setBorderMoverWidtnPx,
    setSelectedAll,
    setSelectedServerForReport,

    setProcessedListOfLogsMain,
    setProcessedListOfLogsBackup,

    setLogFileDateMain,
    setLogFileDateBackup,

    
    setLogFileDurationMain,
    setLogFileDurationBackup,
   

} = logsForwardTASlise.actions;

export const selectorData = ( state ) => {
    return {
        // logDateMain:                state.logsForwardTA.logDateMain,
        // logDateBackup:              state.logsForwardTA.logDateBackup,
        windowLeftWidth:            state.logsForwardTA.windowLeftWidth,
        windowRightWidth:           state.logsForwardTA.windowRightWidth,
        minWidth:                   state.logsForwardTA.minWidth,
        borderMoverWidtnPx:         state.logsForwardTA.borderMoverWidtnPx,
        selectedAll:                state.logsForwardTA.selectedAll,
        selectedServerForReport:    state.logsForwardTA.selectedServerForReport,

        processedListOfLogsMain:    state.logsForwardTA.processedListOfLogsMain,
        processedListOfLogsBackup:  state.logsForwardTA.processedListOfLogsBackup,

        logFileDateMain:  state.logsForwardTA.logFileDateMain,
        logFileDateBackup:  state.logsForwardTA.logFileDateBackup,

        logFileDurationMain:  state.logsForwardTA.logFileDurationMain,
        logFileDurationBackup:  state.logsForwardTA.logFileDurationBackup,




  
    };
};

export default logsForwardTASlise.reducer;






