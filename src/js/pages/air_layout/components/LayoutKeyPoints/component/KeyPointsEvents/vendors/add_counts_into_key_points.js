
import store from './../../../../../../../redux/store.js';

export const add_counts_into_key_points = ( key_points_by_category ) => {

    let { layout } = store.getState();

    let { gridDayEventsList } = layout;

    let result = {};

    let obj = {};

    for( let dayNum = 0; dayNum < 7; dayNum++ ){

        for( let i = 0; i < gridDayEventsList[ dayNum ].length; i++ ){
            let { id, firstSegmentId, eventId } = gridDayEventsList[ dayNum ][ i ];

            if( obj[ eventId ] ){

            }else{
                obj[ eventId ] = [ [], [], [], [], [], [], [] ];
            };

            if( firstSegmentId === null ){
                obj[ eventId ][ dayNum ].push( id );
            }else{
                if( firstSegmentId === id ){
                    obj[ eventId ][ dayNum ].push( id );
                };
            };
        };

    };

    for( let category_id in key_points_by_category ){
        for( let i = 0; i < key_points_by_category[ category_id ].length; i++ ){
            let item = structuredClone( key_points_by_category[ category_id ][ i ] );
            item.gridEvents = [ [], [], [], [], [], [], [] ];
            let eventId = item.id;
            if( obj[ eventId ] ){
                item.gridEvents = structuredClone( obj[ eventId ] );
            };

            if( result[ category_id ] ){

            }else{
                result[ category_id ] = [];
            };
            result[ category_id ].push( item );
        };
    };



    return result;


};