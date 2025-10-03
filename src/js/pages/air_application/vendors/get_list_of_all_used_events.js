
import store from './../../../redux/store.js';

import { get_event_style } from './../../../helpers/get_event_style.js';
import { BLIND_STYLE, BLIND_CHAR_NAME, EVENT_TYPE } from './../../../config/layout.js';

export const get_list_of_all_used_events = ( filteredList, currentCategoryId ) => {

    let listId = [];
    let result = [];

    let { layout } = store.getState();
    let { eventListById } = layout;

    for( let i = 0; i < filteredList.length; i++ ){
        let { event_id, category_id } = filteredList[ i ];

        if( category_id === currentCategoryId ){

            if( listId.indexOf( event_id ) === -1 ){
                listId.push( event_id );
            };
        };
    };

    for( let i = 0; i < listId.length; i++ ){
        let eventId = listId[ i ];

        // let item = {
        //     category_id: 8,
        //     durationTime: "01:20:00",
        //     id: 10,
        //     name: "ХФ вечер_2",
        //     notes: "16+x",
        //     type: "file",
        // };

        let style = get_event_style( eventId );

        if( style.event_is_not_found ){
            style = BLIND_STYLE;
        };

        let item = {};
        

        if( eventListById[ eventId ] ){
            item = { ...eventListById[ eventId ] };
        }else{
            item.category_id = currentCategoryId;
            item.durationTime = '00:00:00';
            item.id = null;
            item.name = BLIND_CHAR_NAME;
            item.notes = '';
            item.type = EVENT_TYPE.FILE;
        };

        item.style = style;

        result.push( item );


    };

    return result;


}