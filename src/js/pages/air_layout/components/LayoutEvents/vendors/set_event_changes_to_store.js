
import store from './../../../../../redux/store.js';
import { setEventList, setEventsIsChanged } from './../../../../../redux/layoutSlice.js';

export const set_event_changes_to_store = ( eventId, object_with_changes ) => {
    let { layout } = store.getState();
    let { eventList } = layout;

    let arr = [];
    for( let i = 0; i < eventList.length; i++ ){
        if( eventList[i].id === eventId ){
            arr.push( { ...eventList[ i ], ...object_with_changes } );
        }else{
            arr.push( { ...eventList[ i ] } );
        };
    };

    store.dispatch( setEventList( arr ) );
    store.dispatch( setEventsIsChanged( true ) );

    // category_id: 6
    // durationTime: "00:25:00"
    // id: 6
    // name: "Панорама итог!"
    // notes: "16+"
    // type: "file"

}