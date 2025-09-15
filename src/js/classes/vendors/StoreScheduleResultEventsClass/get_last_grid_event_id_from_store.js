
import store from './../../../redux/store.js';

export const get_last_grid_event_id_from_store = (  ) => {
    let { layout } = store.getState();
    let { gridDayEventsList } = layout;

    let result = 0;

    for( let dayNum = 0; dayNum < gridDayEventsList.length; dayNum++ ){
        for( let i = 0; i < gridDayEventsList[ dayNum ].length; i++ ){
            let { id } = gridDayEventsList[ dayNum ][ i ];
            if( id > result ){
                result = id;
            };

        };
    };

    if( result > 0 ){
        result = result + 500; // 500 взято от балды. Здесь имеется ввиду что никто не успеет насоздавать 500 событий пока там программный директор расписание готовит
    };

    return result;

}