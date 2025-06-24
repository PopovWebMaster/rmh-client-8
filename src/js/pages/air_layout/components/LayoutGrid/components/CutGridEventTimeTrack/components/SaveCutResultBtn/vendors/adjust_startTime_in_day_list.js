

export const adjust_startTime_in_day_list = ( list ) => {

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

    let result = [];

    let timeSpaceFrom = 0;
    let timeSpaceTo = 24 * 60 * 60 - 1;
    for( let i = 0; i < segments.length; i++ ){
        
        if( i !== 0 ){
            timeSpaceFrom = segments[ i ][ 0 ].startTime;
        };

        if( segments[ i + 1 ] ){
            timeSpaceTo = segments[ i + 1 ][ 0 ].startTime;
        }else{
            timeSpaceTo = 24 * 60 * 60;
        }

        let segmArr = adjust_segment( segments[ i ], timeSpaceFrom, timeSpaceTo );

        result = [ ...result, ...segmArr ];
    };

    return result;
}

function adjust_segment( arr, timeSpaceFrom, timeSpaceTo ){
    let result = [];
    let arr_0 = [];

    let next_startTime = arr[ 0 ].startTime;

    for( let i = 0; i < arr.length; i++ ){

        let { startTime, durationTime } = arr[ i ];

        if( startTime >= next_startTime ){
            arr_0.push( { ...arr[ i ] } );
        }else{
            let item = { ...arr[ i ] };
            item.startTime = next_startTime;
            arr_0.push( { ...item } );
        };
        next_startTime = startTime + durationTime + 1;
    };

    let last_duration = arr_0[ arr_0.length - 1 ].durationTime;
    let last_startTime = arr_0[ arr_0.length - 1 ].startTime;

    if( last_startTime + last_duration < timeSpaceTo ){
        result = arr_0;
    }else{

        let arr_1 = [];

        // let correct_startTime = timeSpaceTo - arr_0[ arr_0.length - 1 ].durationTime - 1;
        let correct_startTime = timeSpaceTo;

        for( let i = arr_0.length - 1; i >= 0; i-- ){

            let { startTime, durationTime } = arr_0[ i ];

            correct_startTime = correct_startTime - durationTime - 1;

            if( startTime > correct_startTime ){
                let item = { ...arr_0[ i ] };
                item.startTime = correct_startTime;
                // correct_startTime = correct_startTime;
                arr_1.push( { ...item } );
            }else{
                arr_1.push( { ...arr_0[ i ] } );
                correct_startTime = startTime;
            };


        };

        result = arr_1;


    };

    




    return result;

}