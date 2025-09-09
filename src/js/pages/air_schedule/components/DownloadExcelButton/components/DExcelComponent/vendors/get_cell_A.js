
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';
import { BORDER_COLOR_STYLE, FONT_SIZE } from './excel_config.js';

export const get_cell_A = ( startTime = false, isKeyPoint = false, isLastBlockRow = false ) => {

    let value = '';

    let border = {
        left: { style: 'thin', color: BORDER_COLOR_STYLE },
    };

    if( startTime !== false ){
        
        border.top = { style: 'thin', color: BORDER_COLOR_STYLE };

        let time = convert_sec_to_time( startTime );

        let arr = time.split(':');
        value = `${arr[0]}:${arr[1]}`;
    };

    if( isLastBlockRow ){
        border.bottom = { style: 'thin', color: BORDER_COLOR_STYLE };
    };

    return { 
        // v: startTime === false? '': convert_sec_to_time( startTime ), 
        v: value, 

        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: FONT_SIZE,
                italic: false,
                bold: isKeyPoint,
            },
            alignment: {
                horizontal: 'center',
                vertical: 'center',
            },
            border,
            // border: {
            //     left: { style: 'thin', color: BORDER_COLOR_STYLE },
            //     bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
            // },
        } 
    };
};