
import store from './../redux/store.js';
import { DEFAULT_CATEGORY } from './../config/layout.js'

export const get_category_by_event_id = ( eventId ) => {

    let { layout } = store.getState();
    let { eventListById, categoryListById } = layout;

    let category = {};
    
    if( eventListById[ eventId ] ){
        
        let category_id = eventListById[ eventId ].category_id;

        if( categoryListById[ category_id ] ){
            category = categoryListById[ category_id ];
        }else{
            category = DEFAULT_CATEGORY
        };
    };

    return category;

}