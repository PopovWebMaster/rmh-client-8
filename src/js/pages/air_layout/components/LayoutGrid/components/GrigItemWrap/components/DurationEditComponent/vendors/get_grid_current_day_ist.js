
import store from './../../../../../../../../../redux/store.js';

export const get_grid_current_day_ist = () => {

    let { layout } = store.getState();
    let { gridDayEventsList, gridCurrentDay } = layout;

    let result = [];

    for( let i = 0; i < gridDayEventsList[ gridCurrentDay ].length; i++ ){

        result.push( { ...gridDayEventsList[ gridCurrentDay ][ i ] } );

    };

    return result;

};