import store from './../../../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const add_all_releases = () => {

    let { scheduleResult } = store.getState();
    let { 
        releaseList,
        usedReleasesById
    } = scheduleResult;


    const resursiveAdd = ( index ) => {
        if( releaseList[ index ] ){

            let { id, grid_event_id } = releaseList[ index ];
            if( grid_event_id === null ){
                // это слепые, их не надо добавлять
            }else{
                if( usedReleasesById[ id ] === true ){
                    // эти добавлены, их не надо добавлять
                }else{
                    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                    StoreScheduleResultEvents.CreateList();
                    StoreScheduleResultEvents.AddRelease( grid_event_id, id );
                    StoreScheduleResultEvents.SetListToStoreOnlySaccess( true );
                };
            };

            if( releaseList[ index + 1 ] ){
                resursiveAdd( index + 1 );
            }else{


                
            };
        }
    };

    resursiveAdd( 0 );



}