
import store from './../../../../../../../../../../../../../redux/store.js';
export const get_matrix_rows = ( used_releases ) => {
    let { schedule } = store.getState();
    let { allTimePointsGroupeList } = schedule;

    // console.dir( 'allTimePointsGroupeList' );
    // console.dir( allTimePointsGroupeList );

    // console.dir( 'used_releases' );
    // console.dir( used_releases );


    let obj = {};

    let result = [];

    for( let YYYY_MM_DD in used_releases ){
        obj[ YYYY_MM_DD ] = [];
        let arr = [];
        for( let i = 0; i < used_releases[ YYYY_MM_DD ].length; i++ ){
            let { startTime } = used_releases[ YYYY_MM_DD ][ i ];
            for( let index = 0; index < allTimePointsGroupeList.length; index++ ){
                let { interval, title } = allTimePointsGroupeList[ index ];
                if( startTime >= interval.from && startTime <= interval.to ){
                    arr.push( index );
                };
            };
        };

        let obj_2 = {};
        for(  let i = 0; i < arr.length; i++ ){
            let index = arr[ i ];
            if( obj_2[ index ] ){
                obj_2[ index ] = obj_2[ index ] + 1;
            }else{
                obj_2[ index ] = 1;
            };
        };

        obj[ YYYY_MM_DD ] = obj_2;
    };

    //     console.dir( 'obj' );
    // console.dir( obj );



    let merg_obj = {};
    for( let YYYY_MM_DD in obj ){
        for( let index in obj[ YYYY_MM_DD ] ){
            if( merg_obj[ index ] ){
                if( obj[ YYYY_MM_DD ][ index ] > merg_obj[ index ] ){
                    merg_obj[ index ] = obj[ YYYY_MM_DD ][ index ];
                };
            }else{
                merg_obj[ index ] = obj[ YYYY_MM_DD ][ index ];
            };
        };
    };


    for( let index in merg_obj ){
        let count = merg_obj[ index ];
        for( let i = 0; i < count; i++ ){
            let { interval, title } = allTimePointsGroupeList[ index ];
            result.push({
                interval,
                title,
                sub_app_id: null,
            });
        };
    };
    return result;




};