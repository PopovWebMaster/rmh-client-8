
import { TimeAdjustmentForDayEventsClass } from './../../../classes/TimeAdjustmentForDayEventsClass.js'

export const make_start_time_adjustments = ( gridDayEventsList ) => { // gridDayEventsList не брать из store !!!!!!!!!

    let result = {
        has_been_completed: true,
        gridDayEventsList: [],
    };

    let has_been_completed = false;

    console.dir( 'gridDayEventsList' );
    console.dir( gridDayEventsList );

    let segments = split_day_into_segments( gridDayEventsList[ 0 ] );

    console.dir( 'segments' );
    console.dir( segments );

    let TimeAdjustmentForDayEvents = new TimeAdjustmentForDayEventsClass();
    TimeAdjustmentForDayEvents.AddDayEventList( gridDayEventsList[ 0 ] );
    TimeAdjustmentForDayEvents.Make();

    // console.dir( TimeAdjustmentForDayEvents );
    

    // for( let dayNum = 0; dayNum < 7; dayNum++ ){

    //     let segments = split_day_into_segments( gridDayEventsList[ dayNum ] );

    //     // for( let i = 0; i < segments.length; i++ ){

    //     //     let list = segments[ i ].list;

    //     //     let down_result = push_down_from_first_element( segments[ i ].list );

    //     //     if( down_result.ok ){

    //     //         let limitTimeTo = down_result.list[ 0 ].startTime;
    //     //         if( segments[ i + 1 ]){
    //     //             limitTimeTo = segments[ i + 1 ].startTime;
    //     //         }else{
    //     //             limitTimeTo = 24 * 60 * 60
    //     //         };
                
    //     //         let up_result = push_up_from_last_element( down_result.list, limitTimeTo );

    //     //         if( up_result.ok ){

    //     //         }


                
                

                
    //     //     }else{

    //     //     };
            

    //     //     // console.dir( 'down_result' );
    //     //     // console.dir( down_result );
    //     // };

        

        



    // };





    return result;
};

function split_day_into_segments( day ){

    let result = [];

    let segment = {
        startTime: 0,
        list: [],
    }

    for( let i = 0; i < day.length; i++ ){
        let { isKeyPoint, startTime, durationTime } = day[ i ];
        if( isKeyPoint ){

            if( segment.list.length === 0 ){
                segment.startTime = startTime;
                segment.list.push( day[ i ] );
            }else{
                result.push( {
                    startTime: segment.startTime,
                    list: [ ...segment.list ],
                } );

                segment = {
                    startTime: startTime,
                    list: [ { ...day[ i ] } ],
                };
            };


        }else{
            segment.list.push( day[ i ] );
        };

        if( i === day.length - 1 ){
            result.push( segment );
        };

    };

    return result;


};

function push_down_from_first_element( arr ){
    let ok = true;
    let new_arr = [];
    let result = {};

    let max_point = 24 * 60 * 60 - 1;

    let start_time_from = 0;

    for( let i = 0; i < arr.length; i++ ){
        if( i === 0 ){
            new_arr.push( arr[ i ] );
        }else{
            start_time_from = arr[ i - 1 ].startTime + arr[ i - 1 ].durationTime + 1;

            let item = { ...arr[ i ] };

            if( start_time_from > item.startTime ){
                item.startTime = start_time_from;
                new_arr.push( item );

            }else{
                new_arr.push( arr[ i ] );
            };
        };
    };

    let last_elem = arr[ arr.length - 1 ];

    if( last_elem.startTime + last_elem.durationTime > max_point ){
        ok = false;
        new_arr = [];
    }else{
        ok = true;
    };

    result.ok = ok;
    result.list = new_arr;

    return result;




}


function push_up_from_last_element( arr, limitTimeTo ){
    let ok = true;
    let new_arr = [];

    console.dir(  'arr' );
    console.dir( arr );
    let next_limitTimeTo = limitTimeTo;

    for( let i = arr.length - 1; i >= 0; i-- ){

        let item = { ...arr[ i ] };

        let { startTime, durationTime, isKeyPoint } = item;

        if( startTime + durationTime < limitTimeTo ){
            
        }else{
            if( isKeyPoint ){
                ok = false;
                new_arr = [];
                break;
            }else{
                item.startTime = next_limitTimeTo - durationTime;
            };
            
        };

        new_arr.unshift( item );
        next_limitTimeTo = next_limitTimeTo - durationTime;

        // let item_st = from_startTime - durationTime - 1;

        // if( item_st === startTime ){ // элемент на своём месте
        //     from_startTime = startTime;
        //     new_arr.pop( item );
        // }else{

        //     if( item_st > startTime ){
        //         from_startTime = startTime;
        //         new_arr.pop( item );
        //     }else{ // надо смещать 

        //         if( isKeyPoint ){
        //             ok = false;
        //             break;
        //         }else{

        //             if( i - 1 >= 0 ){ // превью существует
        //                 item.startTime = item_st;
        //                 from_startTime = item_st;
        //                 new_arr.pop( item );
        //             }else{

        //                 if( item_st < 0 ){
        //                     ok = false;
        //                     break;
        //                 }else{
        //                     item.startTime = item_st;
        //                     from_startTime = item_st;
        //                     new_arr.pop( item );
        //                 };
        //             };
        //         };

        //     };
        // };

    };


    return {
        ok,
        list: new_arr
    };
};

// cutPart: null
// dayNum: 0
// durationTime: 3000
// eventId: 7
// firstSegmentId: null
// id: 20
// isKeyPoint: true
// notes: ""
// pushIt: null
// startTime: 25200