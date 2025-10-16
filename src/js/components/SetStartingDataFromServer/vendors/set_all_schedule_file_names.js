

import store from './../../../redux/store.js';

import { setAllScheduleFileNames } from './../../../redux/scheduleResultSlise.js';

export const set_all_schedule_file_names = ( response ) => {

    let { allScheduleFileNames } = response;
        
    if( allScheduleFileNames ){
        store.dispatch( setAllScheduleFileNames( allScheduleFileNames ) );
    };

};