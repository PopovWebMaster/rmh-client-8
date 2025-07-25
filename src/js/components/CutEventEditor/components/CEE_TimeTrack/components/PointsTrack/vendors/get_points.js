
import { MIN_EVENT_DURATION_SEC } from './../../../../../../../config/layout.js';
import store from './../../../../../../../redux/store.js';

export const get_points = () => {

    let { cutEventEditor } = store.getState();
    let { eventsPartsList, maxDurationTime } = cutEventEditor;

    let first_startTime = 0;

    let result = [];

    for( let i = 0; i < eventsPartsList.length; i++ ){
        let { 
            startTime,
            durationTime,
        } = eventsPartsList[ i ];

        if( i === 0 ){
            first_startTime = startTime;
        };

        if( eventsPartsList[ i + 1 ] ){

            let spaceFrom = 0;
            let spaceTo = 0;
            if( eventsPartsList[ i - 1 ] ){
                spaceFrom = ( eventsPartsList[ i - 1 ].startTime - first_startTime ) + MIN_EVENT_DURATION_SEC
            }else{
                spaceFrom = MIN_EVENT_DURATION_SEC;
            };

            if( eventsPartsList[ i + 2 ] ){
                spaceTo = ( eventsPartsList[ i + 2 ].startTime - first_startTime ) - MIN_EVENT_DURATION_SEC;
            }else{
                spaceTo = maxDurationTime - MIN_EVENT_DURATION_SEC;
            };

            let dif = eventsPartsList[ i + 1 ].startTime - startTime - durationTime;

            result.push({
                // point: eventsPartsList[ i + 1 ].startTime - first_startTime,
                point: eventsPartsList[ i + 1 ].startTime - first_startTime - dif,

                duration: durationTime,
                spaceFrom,
                spaceTo,
            });

        };

    };

    return result;

};