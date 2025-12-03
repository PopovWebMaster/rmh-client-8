
import { PUSH_IT } from './../../../config/layout.js';

export const adjust_startTime_in_list_v2 = ( list, makeCorrectByPushIt = true ) => {

    let result = {
        isError: false,
        newList: [],
    };

    let segments = get_segments( list );

    let newList = [];

    let timeSpaceFrom = 0;
    let timeSpaceTo = 24 * 60 * 60 - 1;
    for( let i = 0; i < segments.length; i++ ){
        if( i !== 0 ){
            timeSpaceFrom = segments[ i ][ 0 ].startTime;
        };
        if( segments[ i + 1 ] ){
            timeSpaceTo = segments[ i + 1 ][ 0 ].startTime - 1;
        }else{
            timeSpaceTo = 24 * 60 * 60 - 1;
        };

        let segmArr = adjust_segment( segments[ i ], timeSpaceFrom, timeSpaceTo );

        if( segmArr.isError ){
            result.isError = true;
        }else{
            newList = [ ...newList, ...segmArr.newList ];
        }

    };

    if( result.isError ){

    }else{
        if( makeCorrectByPushIt ){
            result.newList = correct_by_push_it( newList );
        }else{
            result.newList = newList;
        };

    };

    // result.newList = correct_by_push_it( newList );

    return result;
};


function get_segments( list ){
    let segments = [];

    for( let i = 0; i < list.length; i++ ){
        if( i === 0 ){
            segments.push( [] );
            segments[ segments.length - 1 ].push( list[ 0 ] );
        }else{
            if( list[ i ].isKeyPoint === true ){
                segments.push( [] );
            };
            segments[ segments.length - 1 ].push( list[ i ] );
        };
    };

    return segments;
}

function adjust_segment( segment_list, timeSpaceFrom, timeSpaceTo ){
    let result = {
        isError: false,
        newList: [],
    };

    let newList = [];

    let list_all_bottom = push_all_bottom( segment_list );

    let last_duration = list_all_bottom[ list_all_bottom.length - 1 ].durationTime;
    let last_startTime = list_all_bottom[ list_all_bottom.length - 1 ].startTime;

    if( last_startTime + last_duration <= timeSpaceTo ){

        // result.newList = correct_by_push_it( list_all_bottom );
        result.newList = [ ...list_all_bottom ];
    }else{
        let list_all_top = push_all_top( list_all_bottom, timeSpaceTo );
        let first_start_time = list_all_top[ 0 ].startTime;

        if( first_start_time < timeSpaceFrom ){
            result.isError = true;
        }else{
            // result.newList = correct_by_push_it( list_all_top );
            result.newList = [ ...list_all_top ];
        };
    };


    return result;

}



function push_all_bottom( segment_list ){

    let result = [];

    let next_startTime = segment_list[ 0 ].startTime;

    for( let i = 0; i < segment_list.length; i++ ){

        // console.dir( 'segment_list' );
        // console.dir( segment_list );


        let { startTime, durationTime } = segment_list[ i ];

        if( startTime >= next_startTime ){
            result.push( { ...segment_list[ i ] } );
            next_startTime = startTime + durationTime + 1;
        }else{
            let item = { ...segment_list[ i ] };
            item.startTime = next_startTime;
            result.push( { ...item } );
            next_startTime = next_startTime + durationTime + 1;
            // next_startTime = next_startTime + durationTime;

        };

    };

    return result;
};

function push_all_top( list_all_bottom, timeSpaceTo ){

    let result = [];
    let arr_1 = [];

    let correct_startTime = timeSpaceTo;

    for( let i = list_all_bottom.length - 1; i >= 0; i-- ){

        let { startTime, durationTime } = list_all_bottom[ i ];

        correct_startTime = correct_startTime - durationTime - 1;

        if( startTime > correct_startTime ){
            let item = { ...list_all_bottom[ i ] };
            item.startTime = correct_startTime;
            arr_1.push( { ...item } );
        }else{
            arr_1.push( { ...list_all_bottom[ i ] } );
            correct_startTime = startTime;
        };

    };

    result = arr_1.sort(  ( a, b ) => { 
        if( a.startTime > b.startTime ){ return 1 }else{ return -1 ;}
    } );

    return result;

        
}

function correct_by_push_it( list ){
    let result = [];

    let before_push_up = [];

    for( let i = 0; i < list.length; i++ ){
        let item = structuredClone( list[ i ] );
        let { 
            pushIt,
            isKeyPoint,
            startTime,
            durationTime,
        } = item;

        if( pushIt === PUSH_IT.UP ){
            if( before_push_up[ i - 1 ] ){
                item.startTime === before_push_up[ i - 1 ].startTime + before_push_up[ i - 1 ].durationTime + 1;
            };
        };
        before_push_up.push( item );
    };

    for( let i = before_push_up.length - 1; i >=0; i-- ){

        let item = structuredClone( list[ i ] );
        let { 
            pushIt,
            isKeyPoint,
            startTime,
            durationTime,
        } = item;

        if( pushIt === PUSH_IT.BOTTOM ){
            if( before_push_up[ i + 1 ] ){
                before_push_up[ i ].startTime = before_push_up[ i + 1 ].startTime - before_push_up[ i ].durationTime - 1;
            };
        };

    };

    for( let i = 0; i < before_push_up.length; i++ ){
        let item = structuredClone( before_push_up[ i ] );
        item.pushIt = null;
        result.push( item );
    };

    return result


}