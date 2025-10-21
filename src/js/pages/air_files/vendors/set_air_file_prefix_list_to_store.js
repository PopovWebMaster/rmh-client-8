
import store from './../../../redux/store.js';
import { setFilePrefixList } from './../../../redux/airFilesSlice.js';


import { DEFAULT_CATEGORY, EVENT_TYPE } from './../../../config/layout.js';


export const set_air_file_prefix_list_to_store = ( list ) => {

    let result = [];

    let { layout } = store.getState();
    let { eventListById, categoryListById } = layout;

    let arr = [];

    for( let i = 0; i < list.length; i++ ){
        let { eventId } = list[ i ];

        


        if( eventListById[ eventId ] ){

            let style = {
                backgroundColor: DEFAULT_CATEGORY.colorBG,
                color: DEFAULT_CATEGORY.colorText,
                borderColor: DEFAULT_CATEGORY.colorBG,
            };

            let { category_id, name, type } = eventListById[ eventId ];

            if( categoryListById[ category_id ] ){
                let { colorBG, colorText } = categoryListById[ category_id ];

                if( type === EVENT_TYPE.BLOCK ){
                    style.backgroundColor = '#00000000';
                    style.color = colorBG;
                    style.borderColor = colorBG;

                }else{
                    style.backgroundColor = colorBG;
                    style.color = colorText;
                    style.borderColor = colorBG;
                };

            };


            let item = { ...list[ i ] };
            item.eventName = name;
            item.eventStyle = style;
            item.category_id = category_id;


            arr.push( { ...item } );

        };

    }

    result = arr.sort( ( a, b ) => {

        if( a.category_id > b.category_id ){
            return -1
        }else if( a.category_id < b.category_id ){
            return 1
        }else{
            if( a.eventId > b.eventId ){
                return -1;
            }else{
                return 1;
            };
        };

    } );

    store.dispatch( setFilePrefixList( result ) );

    // return result;

}