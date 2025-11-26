
import store from './../../../../../../../../../redux/store.js';

import { get_grid_current_day_ist } from './get_grid_current_day_ist.js';

import { TimeAdjustmentForDayEventsClass } from './../../../../../../../../../classes/TimeAdjustmentForDayEventsClass.js';
// import { WEEK_NAME } from './../../../../../../../../../config/week.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';

export const make_analysis_of_reset_duration = ( gridEventId, duration_sec ) => {

    // console.dir( 'gridEventId' );
    // console.dir( gridEventId );

    // console.dir( 'duration_sec' );
    // console.dir( duration_sec );


    let result = {
        isErrors: false,
        message: '',
        gridDayEventsList: [ [], [], [], [], [], [], [] ],
    };

    let { layout } = store.getState();
    let { gridDayEventsList, gridCurrentDay } = layout;

    let list = get_grid_current_day_ist();

    // console.dir( 'list' );
    // console.dir( list );

    let TimeAdjustment = new TimeAdjustmentForDayEventsClass();
    TimeAdjustment.AddDayEventList( list );

    let resetResult = TimeAdjustment.ResetDurationForGridEvent( gridEventId, duration_sec );

    if( resetResult.isErrors ){
        result = resetResult;
        result.eventsList = null;
        result.message = `Ошибка! Времменное значение ${ convert_sec_to_time(duration_sec) } в этот блок добавить невозможно.`;
    }else{

        for( let dayNum = 0; dayNum < 7; dayNum++ ){
            if( dayNum === gridCurrentDay ){
                result.gridDayEventsList[ dayNum ] = TimeAdjustment.GetNewEventsList();
            }else{
                result.gridDayEventsList[ dayNum ] = [ ...gridDayEventsList[ dayNum ] ];
            };
        };

    };

    return result;


};