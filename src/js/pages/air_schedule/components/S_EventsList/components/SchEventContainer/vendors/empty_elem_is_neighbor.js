

export const empty_elem_is_neighbor = ( params ) => {
    let {
        durationTime, 
        startTime,
        dragStartStartTime,
        dragStartDuration,
    } = params;

    let result = false;

    if( startTime < dragStartStartTime ){
        if( startTime + durationTime === dragStartStartTime ){
            result = true;
        }else{
            result = false;
        };
    }else{
        if( dragStartStartTime + dragStartDuration + 1 === startTime ){
            result = true;
        }else{
            result = false;
        };
    };

    return result;
   
}