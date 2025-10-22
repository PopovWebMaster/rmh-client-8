import store from './../../../redux/store.js';

import { DEFAULT_CATEGORY, EVENT_TYPE } from './../../../config/layout.js';

export const get_event_data_by_id = ( eventId ) => {

    let result = {
        id: eventId === 'null'? null: Number( eventId ),
        name: 'Неопознанные',
        style: {
            backgroundColor:    DEFAULT_CATEGORY.colorBG,
            color:              DEFAULT_CATEGORY.colorText,
            borderColor:        DEFAULT_CATEGORY.colorBG,
        },
        category_id:    null,
        type:           EVENT_TYPE.FILE,
    };

    let { layout } = store.getState();
    let { eventListById, categoryListById } = layout;

    if( eventListById[ eventId ] ){

        let { category_id, name, type } = eventListById[ eventId ];

        result.category_id =    category_id;
        result.name =           name;
        result.type =           type;

        if( categoryListById[ category_id ] ){
            let { colorBG, colorText } = categoryListById[ category_id ];

            if( type === EVENT_TYPE.BLOCK ){
                result.style.backgroundColor = '#00000000';
                result.style.color = colorBG;
                result.style.borderColor = colorBG;

            }else{
                result.style.backgroundColor = colorBG;
                result.style.color = colorText;
                result.style.borderColor = colorBG;
            };
        };

    };

    return result;

}