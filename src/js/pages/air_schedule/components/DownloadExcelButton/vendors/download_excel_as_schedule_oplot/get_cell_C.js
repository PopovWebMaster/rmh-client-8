
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { FONT_SIZE, BORDER_COLOR_STYLE, FONT_NAME, TABLE_BORDER_CELL_WIDTH } from './excel_config.js';

export const get_cell_C = ( rowData, rowNumber ) => {

    let result = {
        v: convert_sec_to_time( rowData.duration ), 
        // t: "s", 
        t: "t", 
        s: { 
            font: { 
                name: FONT_NAME, 
                sz: FONT_SIZE,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'center',
                vertical: 'center',
            },
            // fill: {
            //     // fgColor: { rgb: FILL_BG_COLOR_GRAY }
            // },
            border: {
                right: { style: TABLE_BORDER_CELL_WIDTH, color: BORDER_COLOR_STYLE },
                bottom: { style: TABLE_BORDER_CELL_WIDTH, color: BORDER_COLOR_STYLE },
            },
            numFmt: "HH:mm:ss"
        } 
    };
    
    // console.dir( rowData );
    // duration

    return result;

}