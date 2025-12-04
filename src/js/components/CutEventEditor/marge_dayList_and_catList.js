
import { add_cut_group_into_day_list } from './vendors/add_cut_group_into_day_list.js';
import { adjust_startTime_in_day_list } from './vendors/adjust_startTime_in_day_list.js';

export const marge_dayList_and_catList = ( dayList, cutList ) => {

    let result = [];

    let cutList_edit = [ ...cutList ]
    if( cutList.length === 1 ){
        let item = structuredClone( cutList[ 0 ] );

        let { firstSegmentId, id } = item;

        if( Number( firstSegmentId ) === Number( id ) ){
            item.firstSegmentId === null;
            item.cutPart === null;
            cutList_edit = [ item ];
        };
    };

    let arr = add_cut_group_into_day_list( dayList, cutList_edit );

    result = adjust_startTime_in_day_list( arr );


    return result;
};