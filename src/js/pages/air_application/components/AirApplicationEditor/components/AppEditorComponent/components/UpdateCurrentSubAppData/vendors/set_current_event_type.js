
import store from './../../../../../../../../../redux/store.js';
import { setCurrentEventType } from './../../../../../../../../../redux/currentSubApplicationSlise.js';

export const set_current_event_type = () => {

    let { currentSubApplication } = store.getState();
    let { eventTypesList } = currentSubApplication;

    let result = null;

    if( eventTypesList[ 0 ] ){
        result = eventTypesList[ 0 ];
    };

    store.dispatch( setCurrentEventType( result ) );
};