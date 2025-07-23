

export const create_schedule_events_list = ( dayNum, gridDayEventsList ) => {

    let result = [];

    for( let i = 0; i < gridDayEventsList[ dayNum ].length; i++ ){

        result.push({ ...gridDayEventsList[ dayNum ][ i ], releases: [] });

    };

    return result;


    

}