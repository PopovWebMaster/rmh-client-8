
import store from './../../../redux/store.js';

import { set_starting_response_to_store } from './../../../components/SetStartingDataFromServer/vendors/set_starting_response_to_store.js';


export const set_one_dayNum_of_gridEventsList_to_store = ( gridDayEventsList_oneDay = false ) => {

    if( gridDayEventsList_oneDay ){

        let { layout } = store.getState();
        let { gridDayEventsList } = layout;

        let margeList = [ [], [], [], [], [], [], [] ];

        for( let dayNum = 0; dayNum < 7; dayNum++ ){
            if( gridDayEventsList_oneDay[ dayNum ].length === 0 ){
                margeList[ dayNum ] = structuredClone( gridDayEventsList[ dayNum ] );
            }else{
                margeList[ dayNum ] = structuredClone( gridDayEventsList_oneDay[ dayNum ] );
            };
        };

        set_starting_response_to_store( { ok: true, gridEventsList: margeList } );
    };
    

}