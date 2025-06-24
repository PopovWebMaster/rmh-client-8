
import store from './../../../../../../../../../redux/store.js';
import { add_cut_group_into_day_list } from './add_cut_group_into_day_list.js';
import { adjust_startTime_in_day_list } from './adjust_startTime_in_day_list.js';

export const add_new_cut_group_into_dayEventsList = ( cutGroup ) => {
    let { layout } = store.getState();
    let { gridDayEventsList, gridCurrentDay } = layout;

    let result = [];

    for( let day_num = 0; day_num < gridDayEventsList.length; day_num++ ){
        if( day_num === gridCurrentDay ){
            let arr = add_cut_group_into_day_list( gridDayEventsList[ day_num ], cutGroup );
            let arr_0 = adjust_startTime_in_day_list( arr );
            result.push( arr_0 );
        }else{
            result.push( [ ...gridDayEventsList[ day_num ] ] );
        };
    };

    return result;

};