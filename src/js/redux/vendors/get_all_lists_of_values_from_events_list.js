
// import { DEFAULT_CATEGORY, EVENT_TYPE } from './../../../../../../../config/layout.js';
import { DEFAULT_CATEGORY, EVENT_TYPE } from './../../config/layout.js';


export const get_all_lists_of_values_from_events_list = ( arr, categoryListById_proxy ) => {

    let eventListById = {};

    let categoryListById = {};

    for( let key in categoryListById_proxy ){
        categoryListById[ key ] = { ...categoryListById_proxy[ key ] }
    };

    for( let i = 0; i < arr.length; i++ ){
        let { 
            id,
        } = arr[ i ];

        let event = arr[ i ];
        let style = {
            backgroundColor:    DEFAULT_CATEGORY.colorBG,
            color:              DEFAULT_CATEGORY.colorText,
            borderColor:        DEFAULT_CATEGORY.colorBG,
        };

        if( categoryListById[ event.category_id ] ){
            let { colorBG, colorText } = categoryListById[ event.category_id ];
            if( event.type === EVENT_TYPE.BLOCK ){
                style.backgroundColor = '#00000000';
                style.color = colorBG;
                style.borderColor = colorBG;
            }else{
                style.backgroundColor = colorBG;
                style.color = colorText;
                style.borderColor = colorBG;
            };
        };

        eventListById[ id ] = { ...arr[ i ], style };

    };

    return {
        eventListById,
    };
};