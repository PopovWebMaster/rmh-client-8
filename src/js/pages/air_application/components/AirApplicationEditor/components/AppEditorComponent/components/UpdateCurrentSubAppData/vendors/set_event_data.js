
import store from './../../../../../../../../../redux/store.js';

import { setEventData } from './../../../../../../../../../redux/currentSubApplicationSlise.js';

export const set_event_data = () => {

    let { application, layout } = store.getState();
    
    let { currentAppEventId } = application;
    let { eventListById } = layout;

    store.dispatch( setEventData( { id: currentAppEventId } ) );



};