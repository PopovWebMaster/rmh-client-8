
import store from './../../../../../redux/store.js';
import { setGridDayEventsList } from './../../../../../redux/layoutSlice.js';

export const remove_grid_event_from_curren_day_in_store = ( gridEventId ) => {

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
            let dayArr = [];

            for( let i = 0; i < gridDayEventsList[ day ].length; i++ ){

                if( gridDayEventsList[ day ][ i ].id === gridEventId ){
                    
                }else{
                    if( gridDayEventsList[ day ][ i ].firstSegmentId === null ){
                        dayArr.push( { ...gridDayEventsList[ day ][ i ] } );
                    }else{
                        if( gridDayEventsList[ day ][ i ].firstSegmentId === gridEventId ){

                        }else{
                            dayArr.push( { ...gridDayEventsList[ day ][ i ] } );
                        };

                    };

                };
            };

            newArr.push( dayArr );
        };
    };

    store.dispatch( setGridDayEventsList( newArr ) );
};