
import { 
    setCurrentAppName,
    setCurrentAppCategoryId,
    setCurrentAppNum,
    setCurrentAppManagerNotes,
    setCurrentSubAppList,
    setCurrentAppIsChanged,
    setCurrentAppEventId,
    setCurrentAppManagerId,

    setApplicationList,

} from './../../../../../redux/applicationSlice.js';

import store from './../../../../../redux/store.js';

export const set_application_data_to_store = ( application, applicationList = false ) => {
    let {
        application_id,
        category_id,
        event_id,
        manager_id,
        name,
        num,
        manager_notes,
        sub_application_list,

    } = application;

    store.dispatch( setCurrentAppName( name ) );
    store.dispatch( setCurrentAppCategoryId( category_id ) );
    store.dispatch( setCurrentAppNum( num ) );
    store.dispatch( setCurrentAppManagerNotes( manager_notes ) );
    store.dispatch( setCurrentAppManagerId( manager_id ) );


    store.dispatch( setCurrentSubAppList( sub_application_list ) );
    store.dispatch( setCurrentAppIsChanged( false ) );
    store.dispatch( setCurrentAppEventId( event_id ) );

    if( applicationList ){
        store.dispatch( setApplicationList( applicationList ) );
    };

}