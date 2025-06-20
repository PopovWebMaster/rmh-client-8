

export const round_to_number = ( num, len = 1 ) => {
    let pow = Math.pow( 10, len )
    return Math.round( num * pow )/pow;

};