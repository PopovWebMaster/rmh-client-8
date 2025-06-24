

export const get_cut_part_left_proc = ( params ) => {
    let {
        gridEventsParts,
        index,
        maxDurationTime,

    } = params;

    let prevew_duration = 0;

    for( let i = 0; i < gridEventsParts.length; i++ ){
        if( i === index ){
            break;
        }else{
            let { durationTime } = gridEventsParts[ i ];
            prevew_duration = prevew_duration + durationTime + 1;
        };
    };

    let result = prevew_duration * 100 / maxDurationTime;

    return result;

};