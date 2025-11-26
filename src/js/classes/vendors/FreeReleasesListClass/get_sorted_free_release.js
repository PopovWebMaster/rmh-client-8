
import store from './../../../redux/store.js';

export const get_sorted_free_release = ( list ) => {

    let result = {};

    let { layout } = store.getState();
    let { eventListById } = layout;

    for( let i = 0; i < list.length; i++ ){
        let { eventId } = list[ i ];

        if( eventListById[ eventId ] ){
            let { category_id } = eventListById[ eventId ];
            
            if( result[ category_id ] ){

            }else{
                result[ category_id ] = {};
            };

            if( result[ category_id ][ eventId ] ){

            }else{
                result[ category_id ][ eventId ] = [  ];
            };

            result[ category_id ][ eventId ].push( { ...list[ i ] } );

        };

    };


    return result;

}