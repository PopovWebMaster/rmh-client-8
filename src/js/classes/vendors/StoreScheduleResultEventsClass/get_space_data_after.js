


export const get_space_data_after = ( list, i ) => {

    let filledDuration = 0;
    let startTimeTo = 24*60*60;

    if( list[ i + 1 ] ){
        for( let index = i + 1; index < list.length; index++ ){
            let { isKeyPoint, durationTime, startTime } = list[ index ];

            if( isKeyPoint === true ){
                startTimeTo = startTime
                break;
            };

            filledDuration = filledDuration + durationTime + 1;
        };
    };


    return {
        filledDuration,
        startTimeTo,
    };

}