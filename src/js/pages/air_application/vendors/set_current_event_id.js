import store from './../../../redux/store.js';

import { setCurrentEventIdOfListFilter } from './../../../redux/applicationSlice.js';

export const set_current_event_id = ( eventId ) => {

    store.dispatch( setCurrentEventIdOfListFilter( eventId ) );

    // console.dir( 'eventId<<<<<<<<' );
    // console.dir( eventId );

    
    localStorage.setItem( 'last_app_filter_event_id', eventId );

}