


export const get_duration_sec = ( gridEventsParts, index ) => {

    let result = 0;

    // if( gridEventsParts[ index - 1 ] ){
    //     result = gridEventsParts[ index - 1 ].durationTime;
    // };
    result = gridEventsParts[ index ].durationTime;

    return result;

}