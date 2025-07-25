
import { add_cut_group_into_day_list } from './vendors/add_cut_group_into_day_list.js';
import { adjust_startTime_in_day_list } from './vendors/adjust_startTime_in_day_list.js';

export const marge_dayList_and_catList = ( dayList, cutList ) => {
    let result = [];

    let arr = add_cut_group_into_day_list( dayList, cutList );
    result = adjust_startTime_in_day_list( arr );


    return result;
};