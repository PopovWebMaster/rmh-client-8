
import store from './../../../../../../../redux/store.js';

import { add_cut_group_into_day_list } from './add_cut_group_into_day_list.js';
import { adjust_startTime_in_day_list } from './adjust_startTime_in_day_list.js';

export const add_new_cut_group_into_dayEventsList = ( cutGroup ) => {
    let { layout } = store.getState();
    let { gridDayEventsList, gridCurrentDay } = layout;

    let result = [];

    let arr = add_cut_group_into_day_list( gridDayEventsList[ gridCurrentDay ], cutGroup );
    result = adjust_startTime_in_day_list( arr );


    return result;

};