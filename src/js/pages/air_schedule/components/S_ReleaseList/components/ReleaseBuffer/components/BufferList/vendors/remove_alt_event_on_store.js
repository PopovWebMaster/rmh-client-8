import store from './../../../../../../../../../redux/store.js';
import { setAltGridEventsList, setAltGridEventsListById } from './../../../../../../../../../redux/scheduleResultDragEventSlise.js';

export const remove_alt_event_on_store = ( alt_id ) => {
        let { scheduleResultDragEvent } = store.getState();
        let { altGridEventsList } = scheduleResultDragEvent;
    
        let arr = [];
        let obj = {};
        
        for( let i = 0; i < altGridEventsList.length; i++ ){
            let { id } = altGridEventsList[ i ];
            if( Number( id ) !== Number( alt_id ) ){
                arr.push( structuredClone( altGridEventsList[ i ] ) );
            };
        };

        for( let i = 0; i < arr.length; i++ ){
            let { id } = arr[ i ];
            obj[ id ] = { ...arr[ i ] };
        };
    
        store.dispatch( setAltGridEventsList( arr ) );
        store.dispatch( setAltGridEventsListById( obj ) );

};