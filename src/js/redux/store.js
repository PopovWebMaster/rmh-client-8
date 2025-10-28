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
import scheduleSlise                from './scheduleSlise.js';
import scheduleResultSlise          from './scheduleResultSlise.js';
import cutEventEditorSlise          from './cutEventEditorSlise.js';
import adminSlice                   from './adminSlice.js';
import airFilesSlice                from './airFilesSlice.js';
import playReportAnalyticsSlise     from './playReportAnalyticsSlise.js';






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
        schedule:       scheduleSlise,
        scheduleResult: scheduleResultSlise,
        cutEventEditor: cutEventEditorSlise,
        admin:         adminSlice,
        airFiles: airFilesSlice,
        playReportAnalytics: playReportAnalyticsSlise,









    },
    
})