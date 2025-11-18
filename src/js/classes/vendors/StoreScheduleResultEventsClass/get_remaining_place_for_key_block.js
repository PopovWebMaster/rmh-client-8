
export const get_remaining_place_for_key_block = ( params ) => {
    let {
        Event,
        releaseData,
        list,
    } = params;

    let { gridEventId, isKeyPoint } = Event;
    let { releaseDuration } = releaseData;

    let startTime_from = 0;
    // let startTime_to = 0;
    let startTime_to = 24 * 60 * 60;

    let startIndex = 0;
    let finishIndex = 0;

    if( isKeyPoint ){
        let start = false;
        for( let i = 0; i < list.length; i++ ){
            if( list[ i ].gridEventId === gridEventId ){
                startIndex = i;
                startTime_from = list[ i ].startTime;
                start = true;
            }else{
                if( start ){
                    if( list[ i ].isKeyPoint ){
                        finishIndex = i - 1;
                        startTime_to = list[ i ].startTime;
                        break;
                    }else{
                        if( list[ i + 1 ]){
                            // тут ничего не должно быть
                        }else{
                            if( start ){
                                finishIndex = i;
                                startTime_to = 24 * 60 * 60;
                            };
                        };
                    };
                };
            };
        };
    }else{
        let start = false;
        for( let i = 0; i < list.length; i++ ){
            if( list[ i ].gridEventId === gridEventId ){
                if( i === 0 ){ 
                    startIndex = 0;
                    startTime_from = 0;
                }else{
                    for( let y = i; y >= 0; y-- ){
                        if( list[ y ].isKeyPoint ){
                            startIndex = y;
                            startTime_from = list[ y ].startTime;
                            break;
                        }else{
                            if( y === 0 ){
                                if( start ){
                                    startIndex = 0;
                                    startTime_from = 0;
                                };
                            }; 
                        };

                    };
                };
                start = true;
            }else{
                if( start ){
                    if( list[ i ].isKeyPoint ){
                        finishIndex = i - 1;
                        startTime_to = list[ i ].startTime;
                        break;
                    }else{
                        if( list[ i + 1 ] ){
                            // тут ничего не должно быть
                        }else{
                            finishIndex = i;
                            startTime_to = 24 * 60 * 60;
                        }; 
                    };
                };
            };
        };

    };

    let arr = [];

    let durationCount = 0;

    // console.dir( 'startIndex' );
    // console.dir( startIndex );
    // console.dir( 'finishIndex' );
    // console.dir( finishIndex );


    for( let i = startIndex; i < finishIndex + 1; i++ ){ 
        let { durationTime, releaseList } = list[ i ];
        // console.dir( 'list[ i ]' );
        // console.dir( list[ i ] );

        // gridEventId


        if( releaseList.length === 0 ){
            if( list[ i ].gridEventId === gridEventId ){
                
            }else{
                durationCount = durationCount + durationTime;
            };
        }else{
            for( let y = 0; y < releaseList.length; y++ ){
                let { releaseDuration } = releaseList[ y ];
                durationCount = durationCount + releaseDuration;
            };
        };

        if( list[ i ].gridEventId === gridEventId ){
            durationCount = durationCount + releaseDuration;
        };



        // arr.push( list[ i ] );
    };

    // console.dir({
    //     startTime_to,startTime_from,durationCount
    // });

    let result = startTime_to - startTime_from - durationCount;

    



    // console.dir( 'Event' )
    // console.dir( Event )
    // console.dir( 'releaseData' )
    // console.dir( releaseData )
    // console.dir( 'list' );
    // console.dir(  list );
    // console.dir( 'arr' );
    // console.dir(  arr );
    // console.dir( {
    //     startTime_from,
    //     startTime_to,
    //     durationCount,
    // } );
    return result;

};