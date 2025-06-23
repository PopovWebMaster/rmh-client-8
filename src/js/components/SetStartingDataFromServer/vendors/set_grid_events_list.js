
import store from './../../../redux/store.js';

import { setGridDayEventsList } from './../../../redux/layoutSlice.js';

export const set_grid_events_list = ( response ) => {


    let { gridEventsList } = response;

    if( gridEventsList ){
        store.dispatch( setGridDayEventsList( gridEventsList ) );
    };
};