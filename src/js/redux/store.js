import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice                from './userInfoSlice.js';
import spinnerSlice                 from './spinnerSlice.js';
import commonSlice                  from './commonSlice.js';
import applicationSlice             from './applicationSlice.js';
import companySlice                 from './companySlice.js';
import logsForwardTASlise           from './logsForwardTASlise.js';
import playReportSlice              from './playReportSlice.js';
import layoutSlice                  from './layoutSlice.js';
import countersSlise                from './countersSlise.js';
import currentSubApplicationSlise   from './currentSubApplicationSlise.js';



export default configureStore({

    reducer: {
        userInfo:       userInfoSlice,
        spinner:        spinnerSlice,
        common:         commonSlice,
        company:        companySlice,
        logsForwardTA:  logsForwardTASlise,
        playReport:     playReportSlice,
        layout:         layoutSlice,
        application:    applicationSlice,
        counters:       countersSlise,
        currentSubApplication: currentSubApplicationSlise,







    },
    
})