
import store from './../../../../../redux/store.js';
import { setGridDayEventsListAsChanged } from './../../../../../redux/layoutSlice.js';

export const set_grid_event_changes_to_store = ( gridEventId, objWithChanges, chackFlag = true ) => {

    if( chackFlag ){

        let { layout } = store.getState();
        let {
            gridCurrentDay,
            gridDayEventsList,
        } = layout; 

        let newArr = [];

        for( let day = 0; day < gridDayEventsList.length; day++ ){

            if( day !== gridCurrentDay ){
                newArr.push( gridDayEventsList[ day ] );
            }else{
                let dayArr = [];
                for( let i = 0; i < gridDayEventsList[ day ].length; i++ ){
                    
                    if( gridDayEventsList[ day ][ i ].id === gridEventId ){
                        dayArr.push( { ...gridDayEventsList[ day ][ i ], ...objWithChanges } );
                    }else{
                        dayArr.push( { ...gridDayEventsList[ day ][ i ] } );
                    };
                };
                newArr.push( dayArr );
            };
        };

        store.dispatch( setGridDayEventsListAsChanged( newArr ) );
    };

};