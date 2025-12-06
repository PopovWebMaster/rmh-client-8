


export const get_space_duration_before = ( list, i ) => {

    let result = 0;

    let { isKeyPoint } = list[ i ];

    if( isKeyPoint ){
        /*
            Если это событие ключевое, то перед ним считать нечего
        */
    }else{

        if( list[ i - 1 ]){
            for( let index = i - 1; index >= 0; index-- ){
                let { isKeyPoint, durationTime, startTime } = list[ index ];
                result = result + durationTime;
                if( isKeyPoint === true ){
                    break;
                }else{
                    if( index === 0 ){
                        if( startTime > 0 ){
                            let rest_duration = startTime - 1;
                            result = result + rest_duration;
                        };
                    };
                };
            };
        }else{
            let { durationTime, startTime } = list[ i ];
            result = durationTime;
            if( startTime > 0 ){
                let rest_duration = startTime - 1;
                result = result + rest_duration;
            };
        };

    };

    return result;


}