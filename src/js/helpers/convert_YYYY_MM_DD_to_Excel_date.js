

export const convert_YYYY_MM_DD_to_Excel_date = ( YYYY_MM_DD ) => {
    let arr = YYYY_MM_DD.split( '-' );

    return `${arr[2]}.${arr[1]}.${arr[0]}`

};