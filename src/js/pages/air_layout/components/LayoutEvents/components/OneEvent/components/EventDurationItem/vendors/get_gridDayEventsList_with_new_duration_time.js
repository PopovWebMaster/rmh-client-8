

import store from './../../../../../../../../../redux/store.js';

import { TimeAdjustmentForDayEventsClass } from './../../../../../../../../../classes/TimeAdjustmentForDayEventsClass.js';
import { WEEK_NAME } from './../../../../../../../../../config/week.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js'

export const get_gridDayEventsList_with_new_duration_time = ( eventId, duration_sec ) => {

    let { layout } = store.getState();
    let { gridDayEventsList } = layout;

    let result = {
        isErrors: false,
        message: '',
        gridDayEventsList: [ [], [], [], [], [], [], [] ],
    };

    let cloneGridEvents = [ [], [], [], [], [], [], [] ];

    for( let dayNum = 0; dayNum < 7; dayNum++ ){
        let arr = [];
        for( let i = 0; i < gridDayEventsList[ dayNum ].length; i++ ){
            arr.push( { ...gridDayEventsList[ dayNum ][ i ] } );
        };
        cloneGridEvents[ dayNum ] = arr;
    };

    for( let dayNum = 0; dayNum < 7; dayNum++ ){

        let TimeAdjustment = new TimeAdjustmentForDayEventsClass();
        TimeAdjustment.AddDayEventList( cloneGridEvents[ dayNum ] );

        let resetResult = TimeAdjustment.ResetDurationForEvents( eventId, duration_sec );

        if( resetResult.isErrors ){
            result = resetResult;
            result.eventsList = null;
            result.message = `Ошибка! Времменное значение ${ convert_sec_to_time(duration_sec) } добавить невозможно. ${WEEK_NAME[ dayNum ]} - ${result.message}`;
            break;
        }else{

            result.gridDayEventsList[ dayNum ] = TimeAdjustment.GetNewEventsList();
        };

        // TimeAdjustment.Make();
        
    };


    return result;


};