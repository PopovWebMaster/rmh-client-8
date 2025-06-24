

export const divide_day_into_sectors = ( day_array ) => {

    let result = [];
    let last_point = 24 * 60 * 60 - 1;

    let sector_list = [];
    let sector_start_time = 0;
    let sector_duration = 0;
    let sector_completed_duration = 0;

    if( day_array.length > 0 ){

        for( let i = 0; i < day_array.length; i++ ){

            let {
                isKeyPoint,
                startTime, 
                durationTime, 

            } = day_array[ i ];

            if( i === 0 ){
                sector_list.push( {  ...day_array[ i ] } );
                sector_start_time = startTime;
                sector_completed_duration = durationTime;

                if( day_array[ i + 1 ] ){

                }else{

                    if( startTime > 0 ){
                        result.push({
                            sector_start_time: 0,
                            sector_completed_duration: 0,
                            sector_duration: startTime - 1,
                            sector_list: [],
                        });
                    };

                    result.push({
                        sector_start_time: startTime,
                        sector_completed_duration: durationTime,
                        sector_duration: last_point - startTime,
                        sector_list: [ day_array[ i ] ],
                    });
                };

            }else if( i < day_array.length - 1 ){

                if( isKeyPoint ){
                    result.push({
                        sector_start_time,
                        sector_completed_duration,
                        sector_duration: startTime - 1 - sector_start_time,
                        sector_list: [ ...sector_list ],
                    });

                    sector_list = [];
                    sector_start_time = startTime;
                    sector_completed_duration = durationTime;
                    sector_list.push( { ...day_array[ i ] } );

                }else{
                    sector_completed_duration = sector_completed_duration + durationTime;
                    sector_list.push( { ...day_array[ i ] } );
                };
                
            }else{

                if( isKeyPoint ){

                    result.push({
                        sector_start_time,
                        sector_completed_duration,
                        sector_duration: startTime - 1 - sector_start_time,
                        sector_list: [ ...sector_list ],
                    });

                    result.push({
                        sector_start_time: startTime,
                        sector_completed_duration: durationTime,
                        sector_duration: last_point - startTime,
                        sector_list: [ day_array[ i ] ],
                    });


                }else{
                    sector_list.push( { ...day_array[ i ] } );
                    sector_completed_duration = sector_completed_duration + durationTime;
                    result.push({
                        sector_start_time,
                        sector_completed_duration,
                        sector_duration: last_point - sector_start_time,
                        sector_list: [ ...sector_list ],
                    });
                };

            };

        };
    }else{
        result.push({
            sector_start_time: 0,
            sector_completed_duration: 0,
            sector_duration: last_point + 1,
            sector_list: [ ],
        });
    };

    return result;
};