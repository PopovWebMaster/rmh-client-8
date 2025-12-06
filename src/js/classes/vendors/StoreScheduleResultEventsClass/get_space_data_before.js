



export const get_space_data_before = ( list, i ) => {

    let filledDuration = 0;
    let startTimeFrom = 0;

    let { isKeyPoint, startTime } = list[ i ];

    if( isKeyPoint ){
        startTimeFrom = startTime;
    }else{
        if( list[ i - 1 ]){
            for( let index = i - 1; index >= 0; index-- ){
                let { isKeyPoint, durationTime, startTime } = list[ index ];
                filledDuration = filledDuration + durationTime;
                if( isKeyPoint === true ){
                    startTimeFrom = startTime;
                    break;
                }else{
                    if( index === 0 ){
                        if( startTime > 0 ){
                            startTimeFrom = startTime;
                            let rest_duration = startTime - 1;
                            filledDuration = filledDuration + rest_duration;
                        };
                    };
                };
            };
        }else{
            let { durationTime, startTime } = list[ i ];
            filledDuration = durationTime;
            if( startTime > 0 ){
                startTimeFrom = startTime;
                let rest_duration = startTime - 1;
                filledDuration = filledDuration + rest_duration;
            };
        };

    };

    return {
        filledDuration,
        startTimeFrom,
    };
}