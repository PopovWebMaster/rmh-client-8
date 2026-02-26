
import store from './../../../../../../../redux/store.js';
import { MIN_EVENT_DURATION_SEC, EVENT_TYPE } from './../../../../../../../config/layout.js'

export const get_event = ( event_id ) => {
    let { layout } = store.getState();
    let { eventListById } = layout;
    let result = {};

    if( eventListById[ event_id ] ){
        result = { ...eventListById[ event_id ] };
    }else{
        result = {
            category_id: null,
            durationTime: MIN_EVENT_DURATION_SEC,
            id: null,
            // name: 'Событие удалено',
            name: 'Слепой график',

            notes: '',
            type: EVENT_TYPE.FILE,
        };
    };


    return result;
};