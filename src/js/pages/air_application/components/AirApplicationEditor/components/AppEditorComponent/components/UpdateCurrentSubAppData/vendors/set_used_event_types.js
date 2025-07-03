
import store from './../../../../../../../../../redux/store.js';
import { setEventTypesList } from './../../../../../../../../../redux/currentSubApplicationSlise.js';

export const set_used_event_types = () => {

    let { currentSubApplication, layout } = store.getState();
    let { participatingEventsList } = currentSubApplication;

    let obj = {};

    for( let i = 0; i < participatingEventsList.length; i++ ){
        let { type } = participatingEventsList[ i ];
        obj[ type ] = true;
    };

    let eventTypes = [];

    for( let key in obj ){
        eventTypes.push( key );
    };

    store.dispatch( setEventTypesList( eventTypes ) );

};