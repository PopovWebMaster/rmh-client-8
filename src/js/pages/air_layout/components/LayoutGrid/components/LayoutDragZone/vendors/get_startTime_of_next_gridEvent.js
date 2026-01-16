
import store from './../../../../../../../redux/store.js';

export const get_startTime_of_next_gridEvent = ( startTime ) => {

    let { layout } = store.getState();
    let {
        gridCurrentDay,
        gridDayEventsList,
    } = layout;

    let result = 24*60*60;

    let list = gridDayEventsList[ gridCurrentDay ];

    for( let i = 0; i < list.length; i++ ){
        if( list[ i ].startTime > startTime ){
            result = list[ i ].startTime;
            break;
        };
    };

    return result;

}