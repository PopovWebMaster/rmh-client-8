

export const get_matrix_rows_data_from_scheduleEvent = ( scheduleEvent ) => {

    let result = [];

    let {
        durationTime,
        finalNotes,
        eventId,
        firstSegmentId,
        gridEventId,
        id,
        isKeyPoint,
        is_premiere,
        startTime,
        releases,
    } = scheduleEvent;

    if( releases.length > 0 ){

    }else{

        // let releaseInfo = 
        // let rowData = {
        //     startTime,
        //     duration,
        //     releaseInfo,
        //     notes: 
        // };
    };

    

    console.dir( scheduleEvent );





    return result;

}