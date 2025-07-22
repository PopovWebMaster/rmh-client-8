
import store from './../../../redux/store.js';
import { 
    setReleaseList,
    setReleaseListByGridEventId,

} from './../../../redux/scheduleResultSlise.js';

export const set_release_list_to_store = ( release_list ) => {

    console.dir( 'release_list' );
    console.dir( release_list );

    store.dispatch( setReleaseList( release_list ) );


};