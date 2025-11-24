
import store from './../../../../../redux/store.js';
import { setEventList } from './../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

export const seve_one_event_changes_on_setver = ( params ) => {
    let {
        eventId,
        eventData,
        callback = () => {},
    } = params;

    let { layout } = store.getState();
    let { eventListById } = layout;

    let event = { ...eventListById[ eventId ], ...eventData };

    // console.dir( 'event' );
    // console.dir( event );


    let data = {
        eventId,
        categoryId:        event.category_id,
        eventName:         event.name,
        eventNotes:        event.notes,
        eventType:         event.type,
        eventDurationTime: event.durationTime,
        eventLinkedFile:   event.linked_file,
    };

    if( event.durationSec ){ // внимание на эту штуку, добавляется только когда меняем время хрон
        data.durationSec = event.durationSec;
    };

    // console.dir( {
    //     event,
    //     eventId,
    //     eventData,
    //     data,
    // } );

    store.dispatch( setSpinnerIsActive( true ) );

    send_request_to_server({
        route: 'save-one-event-data',
        data,
        successCallback: ( response ) => {

            console.dir( 'response' );
            console.dir( response );

            if( response ){

                store.dispatch( setEventList( response.list ) );
                store.dispatch( setSpinnerIsActive( false ) );

                callback();

            };

        }
    });


};