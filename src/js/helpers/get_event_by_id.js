import store from './../redux/store.js';

export const get_event_by_id = ( eventId ) => {

    let { layout } = store.getState();
    let { eventListById } = layout;

    let result = null;
    if( eventListById[ eventId ] ){
        result = { ...eventListById[ eventId ] };
    };

    return result;

};