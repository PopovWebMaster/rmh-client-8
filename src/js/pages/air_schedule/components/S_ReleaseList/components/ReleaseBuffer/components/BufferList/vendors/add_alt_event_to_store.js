
import store from './../../../../../../../../../redux/store.js';
import { setAltGridEventsList, setAltGridEventsListById } from './../../../../../../../../../redux/scheduleResultDragEventSlise.js';

export const add_alt_event_to_store = ( alt_event ) => {

    let { scheduleResultDragEvent } = store.getState();
    let { altGridEventsList } = scheduleResultDragEvent;

    let arr = [];
    let obj = {};
    for( let i = 0; i < altGridEventsList.length; i++ ){
        arr.push( structuredClone( altGridEventsList[ i ] ) );
    };

    arr.push( alt_event );

    for( let i = 0; i < arr.length; i++ ){
        let { id } = arr[ i ];
        obj[ id ] = { ...arr[ i ] };
    };

    store.dispatch( setAltGridEventsList( arr ) );
    store.dispatch( setAltGridEventsListById( obj ) );


}