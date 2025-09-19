
import store from './../../../redux/store.js';
import { 
    setReleaseList,
    setReleaseListByGridEventId,
    setReleaseListById,

} from './../../../redux/scheduleResultSlise.js';

export const set_release_list_to_store = ( release_list ) => {

    // console.dir( 'release_list' );
    // console.dir( release_list );

    let releasesById = {};
    let releasesByGridEventId = {};


    for( let i = 0; i < release_list.length; i++ ){
        let { id, grid_event_id } = release_list[ i ];
        releasesById[ id ] = { ...release_list[ i ] }
        releasesByGridEventId[ grid_event_id ] = { ...release_list[ i ] };
    };

    store.dispatch( setReleaseList( release_list ) );
    store.dispatch( setReleaseListById( releasesById ) );
    store.dispatch( setReleaseListByGridEventId( releasesByGridEventId ) );


};