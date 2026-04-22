

export const get_period_value = ( period_from, period_to ) => {
    
    let result = '';

    let arr_1 = period_from.split( '-' );
    let arr_2 = period_to.split( '-' );

    result = `${arr_1[ 2 ]}.${arr_1[ 1 ]}.${arr_1[ 0 ]} - ${arr_2[ 2 ]}.${arr_2[ 1 ]}.${arr_2[ 0 ]}`

    return result;
};