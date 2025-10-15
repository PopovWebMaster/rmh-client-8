

export const convert_date_str_to_format = {

    YY_MM_DD_points( str ){
        return str.replace( /-/g, '.' );
    },

    YY_MM_DD_points_reverse( str ){
        let arr = str.split( '-' );
        let result  =`${arr[2]}.${arr[1]}.${arr[0]}`;
        return result;
    },

}