
import store from './../../../redux/store.js';
import { 
    setReleaseList,
    setReleaseListByGridEventId,
    setReleaseListById,
    setScheduleEventsList,
    setInfoMessageText,

} from './../../../redux/scheduleResultSlise.js';

// import { StoreScheduleResultEventsClass } from './../../../../classes/StoreScheduleResultEventsClass.js';
import { StoreScheduleResultEventsClass } from './../../../classes/StoreScheduleResultEventsClass.js';


export const set_release_list_and_schedule_list_to_store = ( release_list, schedule_events_List ) => {

    let releasesById = {};
    let releasesByGridEventId = {};


    for( let i = 0; i < release_list.length; i++ ){
        let { id, grid_event_id } = release_list[ i ];
        releasesById[ id ] = { ...release_list[ i ] }
        releasesByGridEventId[ grid_event_id ] = { ...release_list[ i ] };
    };

    let actual_schedule_list = exclude_outdated_releases( schedule_events_List, releasesById );

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList({
        gridEventsList: actual_schedule_list,
    });

    StoreScheduleResultEvents.UpdateData();
    StoreScheduleResultEvents.SetListToStore();










    

    store.dispatch( setReleaseList( release_list ) );
    store.dispatch( setReleaseListById( releasesById ) );
    store.dispatch( setReleaseListByGridEventId( releasesByGridEventId ) );

}

function exclude_outdated_releases( scheduleList, releasesById ){
    let result = [];

    let isset_del_releases = false;

    

    for( let i = 0; i < scheduleList.length; i++ ){
        let item = structuredClone( scheduleList[ i ] );
        item.releases = [];

        for( let y = 0; y < scheduleList[ i ].releases.length; y++ ){
            let release_id = scheduleList[ i ].releases[ y ].id;
            if( typeof release_id === 'number' ){
                if( releasesById[ release_id ] ){

                    let relObj = { ...scheduleList[ i ].releases[ y ], ...releasesById[ release_id ] };
                    if( relObj.air_notes === null ){
                        relObj.air_notes = '';
                    };

                    item.releases.push( relObj );
                }else{
                    isset_del_releases = true;
                };
            }else if( typeof release_id === 'string' ){
                let relObj = { ...scheduleList[ i ].releases[ y ], ...releasesById[ release_id ] };
                if( relObj.air_notes === null ){
                    relObj.air_notes = '';
                };

                item.releases.push( relObj );
            };
        };

        result.push( item );
    };
    if( isset_del_releases ){
        let text = 'Внимание! В расписании есть изменённые заявки! Возможно, требуется корректировка времени выхода роликов';
        store.dispatch( setInfoMessageText( text ) );
    };



    return result;

}