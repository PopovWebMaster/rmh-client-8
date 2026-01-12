
import { get_event_by_id } from './../../../../../../../helpers/get_event_by_id.js';

export const get_TV_P_eventName = ( eventId, quotationMarks, itemNameValue ) => {

    let result = itemNameValue;

    // let event = get_event_by_id( eventId );
    // if( event ){
    //     let { name } = event;
    //     result = name;
    // };
    
    if( quotationMarks ){
        result = `«${result}»`;
    };

    return result;

};