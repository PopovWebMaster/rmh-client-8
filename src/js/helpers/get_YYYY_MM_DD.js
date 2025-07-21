

export const get_YYYY_MM_DD = ( year, month, date ) => {

    let month_num = month + 1;
    if( month_num === 13 ){
        month_num = 1;
    };
    let month_str = `${month_num}`.padStart( 2, '0' );
    let date_str = `${date}`.padStart( 2, '0' );


    let result = `${year}-${ month_str }-${date_str}`;
    return result;

};