

export const divide_day_into_sectors_v2 = ( day_array ) => {

    let spaceTo = 24 * 60 * 60 - 1;

    let result = [
        {
            sector_list: [],
            sector_start_time: 0,
            sector_duration: spaceTo,
            sector_completed_duration: 0,
        }
    ];

    for( let i = 0; i < day_array.length; i++ ){

        let {
            isKeyPoint,
            startTime, 
            durationTime, 
        } = day_array[ i ];

        if( i !== 0 ){
            if( isKeyPoint ){

                result[ result.length - 1 ].sector_duration = startTime - 1 - result[ result.length - 1 ].sector_start_time;

                result.push({
                    sector_start_time: startTime,
                    sector_completed_duration: 0,
                    sector_duration: spaceTo - startTime,
                    sector_list: [],
                });

            };
        };


        let lastIndex = result.length - 1;
        result[ lastIndex ].sector_list.push( { ...day_array[ i ] } );
        result[ lastIndex ].sector_completed_duration = result[ lastIndex ].sector_completed_duration + durationTime;

    };

    return result;





}