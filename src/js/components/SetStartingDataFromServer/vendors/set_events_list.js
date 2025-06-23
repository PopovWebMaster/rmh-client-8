
import store from './../../../redux/store.js';

import { setEventList } from './../../../redux/layoutSlice.js';

export const set_events_list = ( response ) => {

    let { eventsList } = response;

    if( eventsList ){
        store.dispatch( setEventList( eventsList ) );
    };
};