
import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../../config/layout.js';

export const get_points = ( gridEventsParts, maxDurationTime ) => {

    let first_point = 0;
    let last_point = maxDurationTime;

    let first_startTime = 0;

    let result = [];

    for( let i = 0; i < gridEventsParts.length; i++ ){
        let { 
            firstSegmentId,
            id,
            startTime,
            durationTime,
            cutPart,
        } = gridEventsParts[ i ];

        if( i === 0 ){
            first_startTime = startTime;
        };

        if( gridEventsParts[ i + 1 ] ){

            let spaceFrom = 0;
            let spaceTo = 0;
            if( gridEventsParts[ i - 1 ] ){
                spaceFrom = ( gridEventsParts[ i - 1 ].startTime - first_startTime ) + MIN_EVENT_DURATION_SEC
            }else{
                spaceFrom = MIN_EVENT_DURATION_SEC;
            };

            if( gridEventsParts[ i + 2 ] ){
                spaceTo = ( gridEventsParts[ i + 2 ].startTime - first_startTime ) - MIN_EVENT_DURATION_SEC;
            }else{
                spaceTo = maxDurationTime - MIN_EVENT_DURATION_SEC;
            };

            result.push({
                point: gridEventsParts[ i + 1 ].startTime - first_startTime,
                duration: durationTime,
                spaceFrom,
                spaceTo,
            });

        };

    };

    return result;

};