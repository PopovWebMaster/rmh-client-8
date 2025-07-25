
import { MIN_EVENT_DURATION_SEC } from './../../../../../config/layout.js';

import store from './../../../../../redux/store.js';


export const get_time_space_for_one_part = ( index ) => {

    let { cutEventEditor } = store.getState();
    let { eventsPartsList } = cutEventEditor;
    
    let timeSpaceFrom = 0;
    let timeSpaceTo = 0;

    timeSpaceFrom = eventsPartsList[ index ].startTime + MIN_EVENT_DURATION_SEC;

    if( eventsPartsList[ index + 1 ] ){
        timeSpaceTo = eventsPartsList[ index + 1 ].startTime + eventsPartsList[ index + 1 ].durationTime - MIN_EVENT_DURATION_SEC - 1;
    }else{

    };

    return {
        timeSpaceFrom,
        timeSpaceTo,
    };
    
}