
import store from './../redux/store.js';
import { EVENT_TYPE } from './../config/layout.js';

export const get_event_style = ( eventId ) => {

    let result = {
        backgroundColor: '#ffffff00',
        color: '#ffffff00',
        borderColor: '#ffffff00',
        //event_is_not_found
        
    };

    let { layout } = store.getState();
    let { eventListById, categoryListById } = layout;

    if( eventListById[ eventId ] ){
        
        let { type, category_id } = eventListById[ eventId ] ;

        if( categoryListById[ category_id ] ){
            let {
                colorBG,
                colorText,
            } = categoryListById[ category_id ];

             if( type === EVENT_TYPE.FILE ){
                result.backgroundColor = colorBG;
                result.color = colorText;
    
            }else if( type === EVENT_TYPE.BLOCK ){
                result.backgroundColor = '#ffffff00';
                result.color = '#000000';
                result.borderColor = colorBG;
            };
        };
    }else{
        result.event_is_not_found = true;
    };

    return result;

};