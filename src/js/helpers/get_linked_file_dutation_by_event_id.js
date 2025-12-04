
import { get_event_by_id } from './get_event_by_id.js';
export const get_linked_file_dutation_by_event_id = ( event_id ) => {
    let result = 0;
    let event = get_event_by_id( event_id );

    if( event ){
        if( event.linked_file ){
            if( Array.isArray( event.linked_file ) ){
                for( let i = 0; i < event.linked_file.length; i++ ){
                    let { duration } = event.linked_file[ i ];
                    result = result + duration;
                };
            };
        };
    };

    return result;

}