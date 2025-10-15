

export const get_period_value_from_matrix = ( martix ) => {
    let result = '';

    let first = null;
    let last = null;

    for( let i = 0; i < martix.length; i++ ){
        let date  = martix[ i ][ 0 ];
        if( i === 0 ){
            first = date;
        }else{
            if( date === '' ){

            }else{
               last = date;
            };
        };
    };

    if( first!== null && last !== null ){
        result = `${first} - ${last}`;
    }else{
        if( first !== null ){
            result = `${first}`;
        };
    };

    return result;

};