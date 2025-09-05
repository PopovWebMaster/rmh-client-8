
import store from './../../../../../redux/store.js';
import { setGridDayEventsList } from './../../../../../redux/layoutSlice.js';

export const add_new_grid_event_to_current_day_to_store = ( newGridEvent ) => {

    let { layout } = store.getState();
    let {
        gridCurrentDay,
        gridDayEventsList,
    } = layout;

    let newArr = [];

    for( let day = 0; day < gridDayEventsList.length; day++ ){

        if( day !== gridCurrentDay ){
            newArr.push( structuredClone( gridDayEventsList[ day ] ) );
        }else{
            let dayArr = structuredClone( gridDayEventsList[ day ] );

            dayArr.push( { ...newGridEvent } );

            function sortByStartTime( a, b ){
                if( a.startTime > b.startTime ){
                    return 1;
                }else{
                    return -1;
                };
            };

            dayArr.sort( sortByStartTime );

            newArr.push( dayArr );
        };
    };

    store.dispatch( setGridDayEventsList( newArr ) );


    
}