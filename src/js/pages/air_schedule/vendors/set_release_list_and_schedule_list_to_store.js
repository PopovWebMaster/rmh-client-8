
import store from './../../../redux/store.js';
import { 
    setReleaseList,
    setReleaseListByGridEventId,
    setReleaseListById,
    setScheduleEventsList,
    setInfoMessageText,

} from './../../../redux/scheduleResultSlise.js';

export const set_release_list_and_schedule_list_to_store = ( release_list, schedule_events_List ) => {

    let releasesById = {};
    let releasesByGridEventId = {};


    for( let i = 0; i < release_list.length; i++ ){
        let { id, grid_event_id } = release_list[ i ];
        releasesById[ id ] = { ...release_list[ i ] }
        releasesByGridEventId[ grid_event_id ] = { ...release_list[ i ] };
    };


    let actual_schedule_list = exclude_outdated_releases( schedule_events_List, releasesById )

    store.dispatch( setReleaseList( release_list ) );
    store.dispatch( setReleaseListById( releasesById ) );
    store.dispatch( setReleaseListByGridEventId( releasesByGridEventId ) );
    store.dispatch( setScheduleEventsList( actual_schedule_list ) );

}

function exclude_outdated_releases( scheduleList, releasesById ){
    let result = [];

    let isset_del_releases = false;

    for( let i = 0; i < scheduleList.length; i++ ){
        let item = structuredClone( scheduleList[ i ] );
        item.releases = [];

        for( let y = 0; y < scheduleList[ i ].releases.length; y++ ){
            let release_id = scheduleList[ i ].releases[ y ].id;

            if( releasesById[ release_id ] ){
                item.releases.push( { ...scheduleList[ i ].releases[ y ] } );
            }else{
                isset_del_releases = true;
            };
        };

        result.push( item );
    };
    if( isset_del_releases ){
        let text = 'Внимание! В расписании есть удалённые заявки! Возможно, требуется корректировка времён выхода роликов';
        store.dispatch( setInfoMessageText( text ) );
    };

    return result;

}