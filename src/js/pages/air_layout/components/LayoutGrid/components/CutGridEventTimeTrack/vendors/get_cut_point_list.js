

export const get_cut_point_list = ( arr ) => {

    let result = [];

    let firstStartTime = 0;

    for( let i = 0; i < arr.length; i++ ){

        let { startTime } = arr[ i ];
        if( i === 0 ){
            firstStartTime = startTime;
            result.push( 0 );
        }else{
            result.push( startTime - firstStartTime );
        };

    };

    return result;

};