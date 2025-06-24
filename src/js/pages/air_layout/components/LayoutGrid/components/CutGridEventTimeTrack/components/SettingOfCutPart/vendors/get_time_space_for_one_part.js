
import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../config/layout.js'


export const get_time_space_for_one_part = ( gridEventsParts, index ) => {
    
    let timeSpaceFrom = 0;
    let timeSpaceTo = 0;
        // duration,

    timeSpaceFrom = gridEventsParts[ index ].startTime + MIN_EVENT_DURATION_SEC;

    if( gridEventsParts[ index + 1 ] ){
        timeSpaceTo = gridEventsParts[ index + 1 ].startTime + gridEventsParts[ index + 1 ].durationTime - MIN_EVENT_DURATION_SEC - 1;
    }else{

    };

    return {
        timeSpaceFrom,
        timeSpaceTo,
    };
    
}