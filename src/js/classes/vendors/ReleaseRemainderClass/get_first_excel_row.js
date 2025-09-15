
import { convert_date_str_to_format } from './../../../helpers/convert_date_str_to_format.js';

export const get_first_excel_row = ( YYYY_MM_DD ) => {

    let date = '-';

    if( YYYY_MM_DD !== '' ){
        date = convert_date_str_to_format.YY_MM_DD_points( YYYY_MM_DD );
    };

    let value = `Остаток ${date}`

    return [
        { 
            v: value, 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 14,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                } 
            } 
        },
    ];

}